const Router = require('koa-router')
const swaggerUI = require('koa2-swagger-ui').koaSwagger
const swaggerSpec = require('../../core/swagger')

const userRouter = require('./userRouter')
const exampleRouter = require('./exampleRouter')

const router = new Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     CustomResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: integer
 *           description: 状态码
 *         data:
 *           type: any
 *           description: 数据
 *         msg:
 *           type: string
 *           description: 信息
 */
router.get('/swagger', (ctx, next) => {
  swaggerUI({
    routePrefix: false,
    swaggerOptions: {
      spec: swaggerSpec,
    },
  })(ctx, next)
  ctx._originalResponse = true
})

router.use(userRouter.routes(), userRouter.allowedMethods())
router.use(exampleRouter.routes(), exampleRouter.allowedMethods())

module.exports = router
