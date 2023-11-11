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

module.exports = {
  productList,
  searchProduct
}