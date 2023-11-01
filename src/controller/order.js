const { Address, Product, Order } = require('../models/index')

/**
 * 创建用户订单
 * @param {String} username 用户名
 * @param {Object} body 传参
 */
const orderCreate = async (username, body = {}) => {
  const { addressId, shopId, shopName, isCanceled = false, products = [] } = body

  // 获取地址
  const address = await Address.findById(addressId)

  // 获取商品列表
  const pIds = products.map(p => p.id)
  const productList = await Product.find({
    shopId,
    _id: { $in: pIds }
  })

  // 整合商品数量
  const productListAndOrderSales = productList.map(product => {
    const id = product._id.toString()
    const filterProduct = products.filter(item => item.id === id)
    return {
      product,
      orderSales: filterProduct[0].num
    }
  })

  return await Order.create({
    username,
    shopId,
    shopName,
    isCanceled,
    address,
    products: productListAndOrderSales
  })
}

/**
 * 查询用户订单列表
 * @param {String} username 用户名  
 */
const orderList = async (username) => {
  return await Order.find({ username }).sort({ updatedAt: -1 })
}

module.exports = {
  orderCreate,
  orderList
}