const router = require('koa-router')()
const { SuccessModel } = require('../res-model/index')
const productList = require('../controller/product')

router.prefix('/api/shop')

// 查询（某个）商店的商品列表
router.get('/:id/products', async (ctx, next) => {
  const { id } = ctx.params
  const tab = ctx.query.tab || 'all'
  const data = await productList(id, tab)
  ctx.body = new SuccessModel(data)
})

module.exports = router