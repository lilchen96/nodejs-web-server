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

/**
 * @swagger
 * tags:
 *   name: User
 *   description: 用户管理
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: 用户id
 *         account:
 *           type: string
 *           description: 账号
 *         password:
 *           type: string
 *           description: 密码
 *         nickname:
 *           type: string
 *           description: 昵称
 *         age:
 *           type: integer
 *           description: 年龄
 *         createTime:
 *           type: string
 *           description: 创建时间
 *         updateTime:
 *           type: string
 *           description: 更新时间
 *         deleteTime:
 *           type: string
 *           description: 删除时间
 */
router.prefix('/user')

/**
 * @swagger
 * /user:
 *   get:
 *     summary: 获取用户列表
 *     tags: [User]
 *     responses:
 *       200:
 *         description: 用户列表
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/CustomResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       description: 用户列表
 *                       items:
 *                         $ref: '#/components/schemas/User'
 */
router.get('/', GET_USER_LIST)
/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: 获取用户详情
 *     tags: [User]
 * parameters:
 *       - name: id
 *         in: path
 *         description: 要查询的用户的用户名,它是唯一标识
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: 用户详情
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/CustomResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       description: 用户列表
 *                       items:
 *                         $ref: '#/components/schemas/User'
 */
router.get('/:id', GET_USER)
router.post('/', ADD_USER)
router.put('/:id', EDIT_USER)
router.delete('/:id', DELETE_USER)
router.delete('/', BATCH_DELETE_USER)

module.exports = router
