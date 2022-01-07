const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

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

router.get('/edit', (req, res) => res.render('edit'))

module.exports = router