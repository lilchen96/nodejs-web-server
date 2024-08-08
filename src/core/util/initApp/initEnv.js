const path = require('path')
const dotenv = require('dotenv')
const { logger } = require('../../logger')

module.exports = function () {
  const env = process.env.NODE_ENV ?? 'development'
  logger.info('NODE_ENV: %s', env)

  const envConfigPath = path.join(__dirname, '../../../../', `.env.${env}`)

  dotenv.config({
    path: envConfigPath,
  })
}
