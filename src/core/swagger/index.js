const swaggerJSDoc = require('swagger-jsdoc')
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '我是标题',
      version: '1.0.0',
      description: '我是描述',
    },
    //servers的每一项，可以理解为一个服务,实际项目中，可自由修改
    servers: [
      {
        url: '/',
        description: 'API server',
      },
    ],
  },
  apis: ['./src/project/router/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec
