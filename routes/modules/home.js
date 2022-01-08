const express = require('express')
const dayjs = require('dayjs')
const router = express.Router()
const Record = require('../../models/record')

router.get('/', (req, res) => {
  const userId = req.user._id
  Record.find({ userId })
    .lean()
    .then(records => {records.map(record => {
        record.date = dayjs(record.date).format('YYYY/MM/DD')
      })
      res.render('index', { records })
    })
    .catch(err => console.log(err))
})

module.exports = router