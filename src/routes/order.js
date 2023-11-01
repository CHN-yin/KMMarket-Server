const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const { orderCreate, orderList } = require('../controller/order')

router.prefix('/api/order')

// 创建订单
router.post('/', loginCheck, async (ctx, next) => {
  const { username } = ctx.session.userInfo
  const { body } = ctx.request
  console.log(`body is ${body}`);
  try {
    const data = await orderCreate(username, body)
    ctx.body = new SuccessModel(data)
  } catch (e) {
    ctx.body = new ErrorModel(10007, `创建订单失败-${e}`)
  }
})

// 获取订单列表
router.get('/', loginCheck, async (ctx, next) => {
  const { username } = ctx.session.userInfo
  const data = await orderList(username)
  ctx.body = new SuccessModel(data)
})

module.exports = router