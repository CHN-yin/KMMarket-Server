const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const {
  addressCreate,
  addressList,
  addressOne,
  addressUpdate,
  addressDel
} = require('../controller/address')

router.prefix('/api/user/address')

// 创建收货地址
router.post('/', loginCheck, async (ctx, next) => {
  const { username } = ctx.session.userInfo
  const { body } = ctx.request
  try {
    await addressCreate(username, body)
    ctx.body = new SuccessModel()
  } catch (e) {
    ctx.body = new ErrorModel(10004, `创建失败-${e}`)
  }
})

// 获取收货地址列表
router.get('/', loginCheck, async (ctx, next) => {
  const { username } = ctx.session.userInfo
  const data = await addressList(username)
  ctx.body = new SuccessModel(data)
})

// 获取单个收货地址
router.get('/:id', loginCheck, async (ctx, next) => {
  const { username } = ctx.session.userInfo
  const { id } = ctx.params
  const data = await addressOne(username, id)
  ctx.body = new SuccessModel(data)
})

// 更新收货地址
router.patch('/:id', loginCheck, async (ctx, next) => {
  const { username } = ctx.session.userInfo
  const { id } = ctx.params
  const { body } = ctx.request
  try {
    await addressUpdate(username, id, body)
    ctx.body = new SuccessModel()
  } catch (e) {
    ctx.body = new ErrorModel(10005, `更新失败-${e}`)
  }
})

// 删除收货地址
router.delete('/:id', loginCheck, async (ctx, next) => {
  const { username } = ctx.session.userInfo
  const { id } = ctx.params 
  console.log(id);
  try {
    await addressDel(username, id)
    ctx.body = new SuccessModel()
  } catch (e) {
    ctx.body = new ErrorModel(10006, `删除失败-${e}`)
  }

})

module.exports = router