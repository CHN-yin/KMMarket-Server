const { Shop } = require('../models/index')

/**
 * 附近商店
 */
const shopHot = async () => {
  return await Shop.find().sort({ updatedAt: -1 })
}

/**
 * 商店详情
 * @param {String} id id 
 */
const shopDetails = async (id) => {
  return await Shop.findOne({ _id:id })
}

/**
 * 查询店铺
 * @param {string} searchValue 
 * @returns 
 */
const shopSearch = async (searchValue) => {
  return await Shop.find({
    name: { $regex: searchValue }
  })
}

module.exports = {
  shopHot,
  shopDetails,
  shopSearch
}