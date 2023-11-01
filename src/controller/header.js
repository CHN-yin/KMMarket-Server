const { Header } = require('../models/index')

/**
 * 获取头部内容（幻灯片、导航栏）
 */
const headerList = async () => {
  return await Header.findOne()
}

/**
 * 创建头部内容（幻灯片、导航栏）
 * @param {Object} body 内容
 */
const headerCreate = async (body) => {
  return await Header.create({
    ...body
  })
}

module.exports = {
  headerList,
  headerCreate
}