const initApp = require('./core/util/initApp')
initApp()

const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
// const koaLogger = require("koa-logger");

const responseHandle = require('./core/middleware/responseHandle')
const router = require('./core/middleware/router')
const errorHandle = require('./core/middleware/errorHandle')
const { logger } = require('./core/logger')
const { logRequestStart } = require('./core/logger/util')

// error handler
onerror(app)

app.use(json()) // 美化response json

// 自定义middleware
app.use(errorHandle)
app.use(responseHandle)

app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  }),
)

// app.use(koaLogger());
app.use(require('koa-static')(__dirname + '/public'))

// logger
app.use(async (ctx, next) => {
  logRequestStart(ctx)
  await next()
  console.log(1111)
})

// routes
app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  logger.error('Server error %s', err)
})

module.exports = app
