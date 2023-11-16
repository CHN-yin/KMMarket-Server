const { search } = require('koa/lib/request')
const { Product } = require('../models/index')

/**
 * 查询商铺标签的商品
 * @param {String} id 商店id
 * @param {String} tab tab参数
 */
const productList = async (id, tab) => {
  return await Product.find({ shopId: id, tabs: { $in: tab } })
}

/**
 * 搜索商铺的商品
 * @param {string} id 
 * @param {string} searchValue 
 * @returns 
 */
const searchProduct = async (id, searchValue) => {
  return await Product.find({
    shopId: id,
    name: { $regex: searchValue }
  })
}

/**
 * 根据id查询商品
 * @param {string} id 
 * @returns 
 */
const product = async (id) => {
  return await Product.find({
    _id: id
  })
}

module.exports = {
  productList,
  searchProduct,
  product
}