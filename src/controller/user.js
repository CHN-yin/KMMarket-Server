const { User } = require('../models/index')

/**
 * 注册
 * @param {String} username 
 * @param {String} password 
 */
const register = async (username, password) => {
  await User.create({ username, password })
}

/**
 * 登录
 * @param {String} username 
 * @param {String} password 
 */
const login = async (username, password) => {
  return  await User.findOne({ username, password })
}

const code = async (username) => {
  return await User.findOne({ username })
}

/**
 * 忘记密码
 * @param {string} username 
 * @param {string} password 
 * @returns 
 */
const change = async (username, password) => {
  return await User.findOneAndUpdate(
    { username },
    { password },
    { new: true }
    )
}

/**
 * 获取用户信息
 * @param {String} username 
 */
const info = async (username) => {
  return await User.findOne({ username }, { username: 1, imgUrl: 1, nickname: 1 })
}

module.exports = {
  register,
  login,
  info,
  change,
  code
}