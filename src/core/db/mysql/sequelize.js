const Sequelize = require('sequelize')
const config = require('config')
const { logger } = require('../../logger')

const mysqlConfig = config.get('mysql')

const sequelize = new Sequelize(mysqlConfig)

sequelize
  .authenticate()
  .then(() => {
    logger.info('mysql==>连接成功 %j', mysqlConfig)
  })
  .catch((error) => {
    logger.error('mysql==>连接失败 %s', error)
  })

module.exports = sequelize
