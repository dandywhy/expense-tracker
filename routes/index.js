const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const users = require('./modules/users')
const expense = require('./modules/expense')

router.use('/', home)
router.use('/users', users)
router.use('/expense', expense)

module.exports = router

