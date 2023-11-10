const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../res-model/index')
const { shopHot, shopDetails, shopSearch } = require('../controller/shop')

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

// 商店查询
router.post('/search', async (ctx, next) => {
  const { searchValue } = ctx.request.body
  const data = await shopSearch(searchValue)
  if (data.length === 0) return ctx.body = new ErrorModel(1008,'- 暂无相关店铺 -')
  ctx.body = new SuccessModel(data)
})



module.exports = router