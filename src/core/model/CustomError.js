class CustomError extends Error {
  name = 'CustomError'
  code
  data
  constructor({ code = 500, message, data = null }) {
    super(message)
    this.code = code
    this.data = data
  }
}

module.exports = CustomError
