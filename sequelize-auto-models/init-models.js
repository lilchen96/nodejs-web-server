const DataTypes = require('sequelize').DataTypes
const _User = require('./User')

function initModels(sequelize) {
  const User = _User(sequelize, DataTypes)

  return {
    User,
  }
}
module.exports = initModels
module.exports.initModels = initModels
module.exports.default = initModels
