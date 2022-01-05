const mongoose = require('mongoose')
const Schema = mongoose.Schema

const preset = {
  type: String,
  require: true
}

const recordSchema = new Schema({
  name: preset,
  date: preset,
  category: preset,
  expense: preset,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  }
})

moduele.exports = mongoose.model('Record', recordSchema)