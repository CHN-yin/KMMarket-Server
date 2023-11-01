/**
 * @description Oreder Model
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  shopId: String,
  shopName: String,
  isCanceled: {
    type: Boolean,
    default: false
  },
  address: {
    username: String,
    city: String,
    department: String,
    houseNumber: String,
    name: String,
    pahone: String
  },
  products: [
    {
      product: {
        shopId: String,
        name: String,
        imgUrl: String,
        sales: Number,
        price: Number,
        oldPrice: Number,
        tabs: [String]
      },
      orderSales: Number
    }
  ]
}, { timestamps: true })

const Order = mongoose.model('order', Schema)

module.exports = Order