const Router = require('koa-router')
const {
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  GET_USER_LIST,
  GET_USER,
  BATCH_DELETE_USER,
} = require('../controller/userController')

const router = new Router()

router.prefix('/user')

router.get('/', GET_USER_LIST)
router.get('/:id', GET_USER)
router.post('/', ADD_USER)
router.put('/:id', EDIT_USER)
router.delete('/:id', DELETE_USER)
router.delete('/', BATCH_DELETE_USER)

module.exports = router
