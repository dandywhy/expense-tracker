const mongoose = require('mongoose')
const Schema = mongoose.Schema

const preset = {
  type: String,
  require: true
}

const userSchema = new Schema({
  name: preset,
  email: preset,
  password: preset,
  createdAt: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model('User', userSchema)