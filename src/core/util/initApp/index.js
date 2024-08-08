const { logger } = require('../../logger')
const initConfig = require('./initConfig')
const initEnv = require('./initEnv')

module.exports = function () {
  initEnv()
  logger.info('PORT: %s', process.env.PORT)
  initConfig()
}
