class CustomResponse {
  code = 500
  data = null
  msg = ''
  constructor({ code, data, msg }) {
    this.code = code
    this.data = data
    this.msg = msg
  }
}

module.exports = CustomResponse
