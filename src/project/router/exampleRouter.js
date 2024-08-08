const Router = require('koa-router')
const {
  EXAMPLE_SET_BODY_SUCCESS_REQUEST,
  EXAMPLE_NOT_SET_BODY_SUCCESS_REQUEST,
  EXAMPLE_SET_BODY_CUSTOM_RESPONSE_SUCCESS_REQUEST,
  EXAMPLE_CUSTOM_ERROR_REQUEST,
  EXAMPLE_ERROR_REQUEST,
} = require('../controller/exampleController')

const router = new Router()

router.prefix('/example')

router.get('/bodyResponseSuccess', EXAMPLE_SET_BODY_SUCCESS_REQUEST)
router.get('/noBodyResponseSuccess', EXAMPLE_NOT_SET_BODY_SUCCESS_REQUEST)
router.get('/customResponseSuccess', EXAMPLE_SET_BODY_CUSTOM_RESPONSE_SUCCESS_REQUEST)
router.get('/customError', EXAMPLE_CUSTOM_ERROR_REQUEST)
router.get('/error', EXAMPLE_ERROR_REQUEST)

module.exports = router
