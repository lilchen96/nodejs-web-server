const CustomResponse = require('../../core/model/CustomResponse')
const { getUserList, addUser, editUser, deleteUser } = require('../service/userService')

async function GET_USER_LIST(ctx, next) {
  const res = await getUserList()
  ctx.body = res
}

async function GET_USER(ctx, next) {
  // const res = await getUser();
  // return res
}

async function ADD_USER(ctx, next) {
  const params = ctx.request.body
  const res = await addUser(params)
  ctx.body = res
}
async function EDIT_USER(ctx, next) {
  const { id } = ctx.params
  const params = ctx.request.body
  const res = await editUser({
    id,
    ...params,
  })
  ctx.body = res
}

async function DELETE_USER(ctx, next) {
  const { id } = ctx.params
  const res = await deleteUser([id])
  ctx.body = res
}

async function BATCH_DELETE_USER(ctx, next) {
  const { ids } = ctx.request.body
  const res = await deleteUser(ids)
  ctx.body = res
}

module.exports = {
  GET_USER_LIST,
  GET_USER,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  BATCH_DELETE_USER,
}
