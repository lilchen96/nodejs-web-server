const initApp = require('./core/util/initApp')
initApp()

const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
// const koaLogger = require("koa-logger");
const static = require('koa-static')
const responseHandle = require('./core/middleware/responseHandle')
const router = require('./core/middleware/router')
const errorHandle = require('./core/middleware/errorHandle')
const { logger } = require('./core/logger')
const { logRequestStart } = require('./core/logger/util')
const path = require('path')

app.use(static(path.join(__dirname, '..', 'public')))

// error handler
onerror(app)

// 静态文件中间件

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

// logger
app.use(async (ctx, next) => {
  logRequestStart(ctx)
  await next()
})

// routes
app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  logger.error('Server error %s', err)
})

module.exports = app
