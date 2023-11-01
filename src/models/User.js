/**
 * @description User Model
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  username: {
    type: String,
    require: true, // 必需
    unique: true // 唯一
  },
  password: {
    type: String,
    require: true
  },
  nickname: {
    type: String,
    default: function () {
      return '用户' + this.username.slice(-4)
    }
  },
  imgUrl: {
    type:String,
    default: 'https://img2.woyaogexing.com/2023/08/10/399408e3bb35ddd86fd8fb2e10bedf72.jpg'
  }
}, {
  timestamps: true // 时间戳
})

const User = mongoose.model('user', Schema)

module.exports = User