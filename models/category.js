const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const preset = {
  type: String,
  require: true
}

const categorySchema = new Schema({
  name: preset,
  icon: preset
})

module.exports = mongoose.model('Category', categorySchema)