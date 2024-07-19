const { logger } = require('../../logger')
const initConfig = require('./initConfig')
const initEnv = require('./initEnv')

module.exports = function () {
  logger.info('NODE_ENV: %s', process.env.NODE_ENV)
  initEnv()
  logger.info('PORT: %s', process.env.PORT)
  initConfig()
}
