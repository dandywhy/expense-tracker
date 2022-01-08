const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
const dayjs = require('dayjs')
const category = require('../../models/category')

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

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Record.findOne({ _id, userId })
    .lean()
    .then(record => {
      const { categoryId, date } = record
      record.date = dayjs(date).format('YYYY-MM-DD')
      Category.find()
      .lean()
      .then(categories => { 
        categories.map(category => {
          if (categoryId.toString() === category._id.toString()) {
            category.selected = true
            return res.render('edit', { record, categories })
          }
      })
      })
    })
    .catch(err => console.log(err))
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