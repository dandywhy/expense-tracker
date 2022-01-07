if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Category = require('../category')
const db = require('../../config/mongoose')

const CATEGORY = [
  {
    name: "家居物業",
    icon: "fas fa-home"
  },
  {
    name: "交通出行",
    icon: "fas fa-shuttle-van"
  },
  {
    name: "休閒娛樂",
    icon: "fas fa-grin-beam"
  },
  {
    name: "餐飲食品",
    icon: "fas fa-utensils"
  },
  {
    name: "其他",
    icon: "fas fa-pen"
  }
]

db.once('open', () => {
  Promise.all(CATEGORY.map(seed => {
    return Category.create(seed)
  }))
  .then(() => {
    console.log('categoryseed done!')
    process.exit()
  })
  .catch(err => console.log(err))
})