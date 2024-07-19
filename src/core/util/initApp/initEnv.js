const path = require('path')
const dotenv = require('dotenv')

module.exports = function () {
  const env = process.env.NODE_ENV ?? 'development'

  const envConfigPath = path.join(__dirname, '../../../../', `.env.${env}`)

  dotenv.config({
    path: envConfigPath,
  })
}
