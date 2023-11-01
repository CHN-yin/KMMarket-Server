const { Address } = require('../models/index')

/**
 * 创建用户收货地址
 * @param {String} username
 * @param {String} body 
 */
const addressCreate = async (username, body) => {
  return await Address.create({ username, ...body })
}

/**
 * 获取收货地址列表
 * @param {String} username
 */
const addressList = async (username) => {
  return await Address.find({ username }).sort({ updatedAt: -1 })
}

/**
 * 获取单个收货地址
 * @param {String} username 
 * @param {String} id 
 */
const addressOne = async (username, id) => {
  return await Address.findOne({ username, _id:id })
} 

/**
 * 更新收货地址
 * @param {String} username 
 * @param {String} id 
 * @param {Object} body 
 */
const addressUpdate = async (username, id, body) => {
  return await Address.findOneAndUpdate(
    { username, _id:id },
    { ...body },
    { new: true }
  )
}

/**
 * 
 * @param {String} username 
 * @param {String} id 
 * @returns 
 */
const addressDel = async (username, id) => {
  return await Address.findOneAndRemove({ username, _id: id })
}

module.exports = {
  addressCreate,
  addressList,
  addressOne,
  addressUpdate,
  addressDel
}