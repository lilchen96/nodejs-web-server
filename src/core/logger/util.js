const { logger } = require('.')

function logRequestStart(ctx) {
  logger.info(`${ctx.method} ${ctx.url} - query: %j requestBody: %j`, ctx.query, ctx.request.body)
  const start = new Date()
  ctx.startTime = start
}
function logRequestEnd(ctx) {
  const ms = new Date() - ctx.startTime
  logger.info(
    `${ctx.method} ${ctx.url} - query: %j requestBody: %j - response: %j - ${ms}ms`,
    ctx.query,
    ctx.request.body,
    ctx.body,
    ms,
  )
}

module.exports = {
  logRequestStart,
  logRequestEnd,
}
