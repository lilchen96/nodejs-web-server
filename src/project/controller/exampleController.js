const CustomResponse = require('../../core/model/CustomResponse')
const {
  exampleSuccessRequest,
  exampleCustomErrorRequest,
  exampleErrorRequest,
} = require('../service/exampleService')
// 成功-设置body值,最终会返回 {"code":200,"data":xxx(ctx.body设置的值),"msg":"操作成功!"}
async function EXAMPLE_SET_BODY_SUCCESS_REQUEST(ctx, next) {
  const res = await exampleSuccessRequest()
  ctx.body = res
}

// 成功-不设置body值,最终会返回 {"code":200,"data":null,"msg":"操作成功!"}
async function EXAMPLE_NOT_SET_BODY_SUCCESS_REQUEST(ctx, next) {
  await exampleSuccessRequest()
}

// 成功-设置body值为CustomResponse,最终会返回你创建的这个CustomResponse实例
async function EXAMPLE_SET_BODY_CUSTOM_RESPONSE_SUCCESS_REQUEST(ctx, next) {
  const res = await exampleSuccessRequest()
  ctx.body = new CustomResponse({
    code: 111,
    data: res,
    msg: '自定义msg',
  })
}

// 自定义报错CustomError,最终会返回 {"code":xxx(CustomError的code,默认500),"data":xxx(CustomError的data,默认null),"msg":xxx(CustomError的message)}
async function EXAMPLE_CUSTOM_ERROR_REQUEST(ctx, next) {
  const res = await exampleCustomErrorRequest()
  ctx.body = res
}
// 非自定义报错Error,最终会进入koa-onerror,返回错误信息html
async function EXAMPLE_ERROR_REQUEST(ctx, next) {
  const res = await exampleErrorRequest()
  ctx.body = res
}

module.exports = {
  EXAMPLE_SET_BODY_SUCCESS_REQUEST,
  EXAMPLE_NOT_SET_BODY_SUCCESS_REQUEST,
  EXAMPLE_SET_BODY_CUSTOM_RESPONSE_SUCCESS_REQUEST,
  EXAMPLE_CUSTOM_ERROR_REQUEST,
  EXAMPLE_ERROR_REQUEST,
}
