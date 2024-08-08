const CustomError = require('../../core/model/CustomError')
const { queryUsers, createUser, updateUserById, destroyUserByIds } = require('../dao/userDao')

async function getUserList() {
  const list = await queryUsers()
  return list
}

async function addUser({ account, password, nickname, age }) {
  const res = await createUser({
    account,
    password,
    nickname,
    age,
  })
  return res
}

async function editUser({ id, account, password, nickname, age }) {
  if (!id) {
    throw new CustomError({
      message: 'id不能为空!',
    })
  }
  const res = await updateUserById({
    id,
    account,
    password,
    nickname,
    age,
  })
  if (!res) {
    throw new CustomError({
      message: 'id不存在!',
    })
  }
  return res
}

async function deleteUser(ids) {
  if (!ids) {
    throw new CustomError({
      message: 'id不能为空!',
    })
  }
  const num = await destroyUserByIds(ids)
  return num
}

module.exports = {
  getUserList,
  addUser,
  editUser,
  deleteUser,
}
