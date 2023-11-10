/**
 * @description 登录验证中间件
 */

const { ErrorModel } = require('../res-model/index')

module.exports = async (ctx, next) => {
  const session = ctx.session
  if(session && session.userInfo) {
    return await next()
  }
  ctx.body = new ErrorModel(10003, '请登录')
}