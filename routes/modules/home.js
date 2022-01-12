const express = require('express')
const dayjs = require('dayjs')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')


router.get('/', async (req, res) => {
  const userId = req.user._id
  const categories = await Category.find().lean()
  const records = await Record.find({ userId }).lean()

  records.forEach(record => record.date = dayjs(record.date).format('YYYY/MM/DD'))
  res.render('index', { records, categories })
})

router.get('/search/:sort', async (req, res) => {
  const sortId = req.params.sort
  const userId = req.user._id
  const categories = await Category.find().lean()
  const selectedCategory = categories.filter(category => { return category._id.toString() === sortId })[0]
  const records = await Record.find({ userId, categoryId: sortId }).lean()
  records.forEach(record => record.date = dayjs(record.date).format('YYYY/MM/DD'))
  res.render('index', { records, categories, selectedCategory })
})

module.exports = router