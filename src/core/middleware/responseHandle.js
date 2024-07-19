const { logRequestEnd } = require('../logger/util')
const CustomResponse = require('../model/CustomResponse')

const responseHandle = async (ctx, next) => {
  await next()
  if (!(ctx.body instanceof CustomResponse)) {
    ctx.body = new CustomResponse({
      code: 200,
      data: ctx.body ?? null,
      msg: '操作成功!',
    })
  }
  logRequestEnd(ctx)
}

module.exports = responseHandle
