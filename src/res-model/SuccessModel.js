/**
 * @description 成功返回的数据模型
 */

class SuccessModel {
  constructor (data) {
    this.errno = 0
    if (data) this.data = data
    this.message = 'errno !== 0 错误信息'
  }
}

module.exports = SuccessModel