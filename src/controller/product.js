const { Product } = require('../models/index')

/**
 * 
 * @param {String} id 商店id
 * @param {String} tab tab参数
 */
const productList = async (id, tab) => {
  return await Product.find({ shopId: id, tabs: { $in: tab } })
}

module.exports = productList