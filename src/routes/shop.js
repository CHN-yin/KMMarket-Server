const router = require('koa-router')()
const { SuccessModel } = require('../res-model/index')
const { shopHot, shopDetails } = require('../controller/shop')

router.prefix('/api/shop')

// 附近商店
router.get('/hot-list', async (ctx, next) => {
  const data = await shopHot()
  ctx.body = new SuccessModel(data)
})

// 商店详情
router.get('/:id', async (ctx, next) => {
  const { id } = ctx.params
  const data = await shopDetails(id)
  ctx.body = new SuccessModel(data)
})



module.exports = router