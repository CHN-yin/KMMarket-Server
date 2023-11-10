/**
 * @description 连接数据库
 */
const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1/kmgj'

/**
 * @description 开始连接
 */
mongoose.connect(url,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

/**
 * @description 连接对象
 */
const db = mongoose.connection

db.on('error', err => {
  console.error('mongodb 连接错误', err);
})

module.exports = mongoose
