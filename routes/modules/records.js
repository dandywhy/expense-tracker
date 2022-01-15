const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
const dayjs = require('dayjs')


router.get('/new', (req, res) => res.render('new'))

router.post('/new', (req, res) => {
  const userId = req.user._id
  const categoryName = req.body.categoryId
  Category.findOne({ name: categoryName })
    .then(category => {
      const { icon, _id } = category
      const recordData = { 
        userId,
        categoryId: _id,
        icon 
      }
      return Record.create(Object.assign(req.body, recordData))
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

router.get('/:id/edit', async (req, res) => {
  try {
    const userId = req.user._id
    const _id = req.params.id
    const record = await Record.findOne({ _id, userId }).lean()
    const { categoryId, date } = record
    record.date = dayjs(date).format('YYYY-MM-DD')
    const categories = await Category.find().lean()
    categories.map(category => {
      if (categoryId.toString() === category._id.toString()) {
        category.selected = true
        res.render('edit', { record, categories })
      }
    })
  } catch {
    console.log(error)
  }
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Category.findOne({ _id: req.body.categoryId })
    .then(category => { return category.icon })
    .then(icon => { return Object.assign(req.body, { icon }) })
    .then(() => {
      Record.findByIdAndUpdate({ _id, userId }, { $set: req.body })
        .then(() => res.redirect('/'))    
    })
    .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router