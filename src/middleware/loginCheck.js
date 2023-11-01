/**
 * @description 登录验证中间件
 */

const { ErrorModel } = require('../res-model/index')

module.exports = async (ctx, next) => {
  const session = ctx.session
  if(session && session.userInfo) {
    console.log('userInfo', session.userInfo);
    return await next()
  }
  console.log('userInfo', session.userInfo);
  ctx.body = new ErrorModel(10003, '请登录')
}