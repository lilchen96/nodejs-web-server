const winston = require('winston')
const { consoleTransport, dailyRotateFileTransport } = require('./common')

const logger = winston.createLogger({
  level: 'info',
  transports: [consoleTransport, dailyRotateFileTransport],
})

module.exports = {
  logger,
}
