const { logRequestEnd } = require('../logger/util')
const CustomError = require('../model/CustomError')
const CustomResponse = require('../model/CustomResponse')

// TODO 统一logger
const errorHandle = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    // 自定义错误
    if (error instanceof CustomError) {
      ctx.status = 200
      ctx.body = new CustomResponse({
        code: error.code,
        data: error.data,
        msg: error.message,
      })
      logRequestEnd(ctx)
    } else {
      // 抛给koa-onError
      throw error
    }
  }
}

module.exports = errorHandle
