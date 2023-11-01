const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const session = require('koa-generic-session')

const index = require('./routes/index')
const user = require('./routes/user')
const address = require('./routes/address')
const shop = require('./routes/shop')
const product = require('./routes/product')
const order = require('./routes/order')
const header = require('./routes/header')

// error handler
onerror(app)

// 跨域支持
app.use(cors({
  origin: 'http://localhost:8080',   // 支持跨域的域
  credentials: true    // 允许跨域携带cookie
}))



// session 配置
app.keys = ['KHkuI6^IHk(&(*kUH']
app.use(session({
  // 配置 cookie
  cookie: {
    path: '/',
    httpOnly: true, // 只在服务端操作cookie
    maxAge: 24*60*60*1000
  }
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(address.routes(),address.allowedMethods())
app.use(shop.routes(), shop.allowedMethods())
app.use(product.routes(), product.allowedMethods())
app.use(order.routes(), order.allowedMethods())
app.use(header.routes(), header.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
