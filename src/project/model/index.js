const sequelize = require('../../core/db/mysql/sequelize')
const { initModels } = require('./init-models')

const models = initModels(sequelize)

module.exports = models
