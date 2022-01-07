const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const db = require('../../config/mongoose')
const User = require('../user')
const Record = require('../record')
const Category = require('../category')
const SEED_USER = [
  {
    name: '廣志',
    email: 'user1@test.com',
    password: '123',
    list: [0, 1, 2, 4]
  },
  {
    name: '小新',
    email: 'user2@test.com',
    password: '123',
    list: [3]
  }
]
const SEED_RECORD = [
  {
    id: 1,
    name: '午餐',
    date: '2019/4/23',
    amount: 60,
    category: '餐飲食品'
  },
  { 
    id: 2,
    name: '晚餐',
    date: '2019/4/23',
    amount: 60,
    category: '餐飲食品'
  },
  {
    id: 3,
    name: '捷運',
    date: '2019/4/23',
    amount: 120,
    category: '交通出行'
  },
  {
    id: 4,
    name: '電影:驚奇隊長',
    date: '2019/4/23',
    amount: 220,
    category: '休閒娛樂'
  },
  {
    id: 5,
    name: '租金',
    date: '2015/4/1',
    amount: 25000,
    category: '家居物業'
  }
]

db.once('open', () => {
  Promise.all(SEED_USER.map(seed_user => {
    const { name, email, password, list } = seed_user
    return bcrypt
      .genSalt(10)
      .then(salt => { return bcrypt.hash(password, salt) })
      .then(hash => { return User.create({ name, email, password: hash }) })
      .then(user => {
        const userId = user._id
        return Promise.all(list.map(index => { 
          const categoryName =  SEED_RECORD[index].category 
          return Category.findOne({ name: categoryName })
           .then(category => {
             const { _id, icon } = category
             Object.assign(SEED_RECORD[index], { userId, categoryId: _id, icon })
             return Record.create(SEED_RECORD[index])
           })
        }))
      })
  }))
  .then(() => {
    console.log('recordseeder done!')
    process.exit()
  })
  .catch(err => console.log(err))
})

