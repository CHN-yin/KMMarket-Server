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

module.exports = {
  shopHot,
  shopDetails
}