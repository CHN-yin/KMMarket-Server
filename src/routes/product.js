const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../res-model/index')
const { productList, searchProduct, product } = require('../controller/product')

router.prefix('/api/shop')

// 查询（某个）商店的商品列表
router.get('/:id/products', async (ctx, next) => {
  const { id } = ctx.params
  const tab = ctx.query.tab || 'all'
  const data = await productList(id, tab)
  ctx.body = new SuccessModel(data)
})

// 搜索（某个）商店的商品
router.post('/:id/search', async (ctx, next) => {
  const { id } = ctx.params
  const { searchValue } = ctx.request.body
  const data = await searchProduct(id, searchValue)
  if (data.length === 0) return ctx.body = new ErrorModel(1008, '- 店铺暂无此商品 -')
  ctx.body = new SuccessModel(data)
})

// 跟据商品id查询商品信息
router.get('/product/:id', async (ctx, next) => {
  const { id } = ctx.params
  const data = await product(id)
  if (data.length === 0) return ctx.body = new ErrorModel(1008, '- 暂无此商品 -')
  ctx.body = new SuccessModel(data)
})
module.exports = router