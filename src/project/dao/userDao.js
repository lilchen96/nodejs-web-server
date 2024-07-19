const { Op } = require('sequelize')
const { User } = require('../model')

async function queryUsers() {
  const list = await User.findAll({
    raw: true,
  })
  return list
}

async function createUser(data) {
  const user = await User.create(data)
  return user
}

async function updateUserById({ id, ...rest }) {
  const [affectedCount] = await User.update(rest, {
    where: {
      id: id,
    },
  })
  return affectedCount === 1 ? id : null
}

async function destroyUserByIds(ids) {
  const num = await User.destroy({
    where: {
      id: {
        [Op.in]: ids,
      },
    },
  })
  return num
}

module.exports = {
  queryUsers,
  createUser,
  updateUserById,
  destroyUserByIds,
}
