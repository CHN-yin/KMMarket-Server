/**
 * 整合文件
 */

const User = require('./User')
const Address = require('./Address')
const Shop = require('./Shop')
const Product = require('./Product')
const Order = require('./Order')
const Header = require('./Header')

module.exports = {
  User,
  Address,
  Shop,
  Product,
  Order,
  Header
}