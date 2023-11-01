/**
 * @description Shop Model
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  imgUrl: String,
  sales: String,
  expressLimit: {
    type: Number,
    default: 0 // 默认
  },
  expressPrice: {
    type: Number,
    default: 0 // 默认
  },
  slogan: String

},{
  timestamps: true
})

const Shop = mongoose.model('shop', Schema)

module.exports = Shop