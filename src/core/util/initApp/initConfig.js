const path = require('path')
const { logger } = require('../../logger')

module.exports = function () {
  const nodeConfigDir = path.join(__dirname, '../../../config')
  process.env.NODE_CONFIG_DIR = nodeConfigDir
  logger.info('CONFIGS: %s', nodeConfigDir)
}
