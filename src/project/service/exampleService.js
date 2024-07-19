const CustomError = require('../../core/model/CustomError')
const { exampleExample } = require('../dao/exampleDao')

async function exampleSuccessRequest() {
  const res = await exampleExample()
  return res
}

async function exampleCustomErrorRequest() {
  const res = await exampleExample()
  throw new CustomError({
    message: '逻辑异常1!',
  })
}
async function exampleErrorRequest() {
  const a = null
  a.length
  const res = await exampleExample()
  return res
}

module.exports = {
  exampleSuccessRequest,
  exampleCustomErrorRequest,
  exampleErrorRequest,
}
