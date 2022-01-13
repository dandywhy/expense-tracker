const express = require('express')
const dayjs = require('dayjs')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')


router.get('/', async (req, res) => {
  const userId = req.user._id
  const categories = await Category.find().lean()
  const records = await Record.find({ userId }).lean()
  let totalAmount = 0
  records.forEach(record => {
    record.date = dayjs(record.date).format('YYYY/MM/DD')
    totalAmount += record.amount
  })
  res.render('index', { records, categories, totalAmount })
})

router.get('/category/:sort', async (req, res) => {
  const sortId = req.params.sort
  const userId = req.user._id
  const categories = await Category.find().lean()
  const selectedCategory = categories.filter(category => { return category._id.toString() === sortId })[0]
  const records = await Record.find({ userId, categoryId: sortId }).lean()
  let totalAmount = 0
  records.forEach(record => {
    record.date = dayjs(record.date).format('YYYY/MM/DD')
    totalAmount += record.amount
  })
  res.render('index', { records, categories, selectedCategory, totalAmount })
})

module.exports = router