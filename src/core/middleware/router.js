const Router = require('koa-router')
const userRouter = require('../../project/router/userRouter')
const exampleRouter = require('../../project/router/exampleRouter')

const router = new Router()

router.use(userRouter.routes(), userRouter.allowedMethods())
router.use(exampleRouter.routes(), exampleRouter.allowedMethods())

module.exports = router
