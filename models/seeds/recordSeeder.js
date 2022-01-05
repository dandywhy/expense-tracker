const ExpenseTrack = require('../record')
const db = require('../../config/mongoose')

const SEED_USER = [
  {
    name: 'Andy',
    email: 'Andy@test.com',
    password: '123'
  }
]

db.once('once', () => {
  
})