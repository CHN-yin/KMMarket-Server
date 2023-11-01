const router = require('koa-router')()
const { headerList, headerCreate } = require('../controller/header')
const { SuccessModel } = require('../res-model/index')

router.prefix('/api/header')

// 获取头部内容
router.get('/', async (ctx, next) => {
  const data = await headerList()
  ctx.body = new SuccessModel(data)
})

// 创建头部内容
router.post('/', async (ctx, next) => {
  const { body } = ctx.request
  await headerCreate(body)
})

module.exports = router