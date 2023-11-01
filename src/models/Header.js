/**
 * @description Header Model
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  nav: [
    {
      imgUrl: String,
      desc: String
    }
  ],
  banner: [
    {
      imgUrl: String
    }
  ]
}, { timestamps: true })

const Header = mongoose.model('header-content', Schema)

module.exports = Header