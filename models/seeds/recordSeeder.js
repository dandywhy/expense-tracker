if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const db = require('../../config/mongoose')
const User = require('../user')
const Record = require('../record')
const SEED_USER = [
  {
    name: 'Andy',
    email: 'Andy@test.com',
    password: '123'
  }
]
const SEED_RECORD = [
  {
    name: '早餐',
    date: '2022-1-5',
    amount: 50,
    category: "餐飲食品"
  },
  {
    name: '電影:月老',
    date: '2021-12-30',
    amount: 250,
    category: "休閒娛樂"
  }
]

db.once('once', () => {
  Promise.all(SEED_USER.map((seed_user) => {
    return Promise.all(SEED_RECORD.map((seed_record) => {
      
    })
  )}))
  .then(() => {
    console.log('recordSeeder done!')
    process.exit()
  })
  .catch(err => console.log(err))
})