const router = require('koa-router')()
const { register, login, code, change, info } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/api/user')

// 注册
router.post('/register', async (ctx, next) => {
  const { username, password } = ctx.request.body
  try {
    await register(username, password)
    ctx.body = new SuccessModel()
  } catch (e) {
    ctx.body = new ErrorModel(10001, `注册失败-${e}`)
  }
})

// 登录
router.post('/login', async (ctx,next) => {
  const {username, password} = ctx.request.body
  const data =  await login(username, password)
  if (!data) return ctx.body = new ErrorModel(10002, '用户名或密码错误')
  ctx.session.userInfo = { username }
  ctx.body = new SuccessModel()
})

// 验证码
router.post('/code', async (ctx, next) => {
  const {username} = ctx.request.body
  const data = await code(username)
  console.log(data);
  if (!data) return ctx.body = new ErrorModel('1002', '用户不存在')
  ctx.body = new SuccessModel(data.message)
})

// 忘记密码
router.patch('/changepwd', async (ctx,next) => {
  const {username, password} = ctx.request.body
  try {
    await change(username, password)
    ctx.body = new SuccessModel('密码已修改')
  } catch (e) {
    ctx.body = new ErrorModel('1002', `error${e}`)
  }
})

// 获取用户信息
router.get('/info', loginCheck, async (ctx, next) => {
  const { username } = ctx.session.userInfo
  const data = await info(username)
  ctx.body = new SuccessModel(data)
})

// 检验用户是否登录
router.get('/test', loginCheck, async (ctx, next) => {
  ctx.body = new SuccessModel('登录成功')
})

module.exports = router
