const winston = require('winston')
const { format } = require('winston')
require('winston-daily-rotate-file')
const path = require('path')

// 自定义日志格式
const customFormat = format.combine(
  format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss.SSS',
  }),
  format.splat(),
  format.printf(({ timestamp, level, message }) => {
    return `[${timestamp}] [${level}] ${message}`
  }),
)

//  控制台输出
const consoleTransport = new winston.transports.Console({
  level: 'debug',
  format: format.combine(
    format.colorize({
      all: true,
    }),
    customFormat,
  ),
})

// const dirname = require('../../../')

//  日文件输出
const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
  dirname: 'logs',
  filename: '%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '7d',
  level: 'info',
  format: customFormat,
})

module.exports = {
  consoleTransport,
  dailyRotateFileTransport,
}
