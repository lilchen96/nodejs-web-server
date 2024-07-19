const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  return User.init(sequelize, DataTypes)
}

class User extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          comment: 'id',
        },
        account: {
          type: DataTypes.STRING(100),
          allowNull: false,
          comment: '账号',
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
          comment: '密码',
        },
        nickname: {
          type: DataTypes.STRING(100),
          allowNull: true,
          comment: '昵称',
        },
        age: {
          type: DataTypes.INTEGER,
          allowNull: true,
          comment: '年龄',
        },
      },
      {
        sequelize,
        tableName: 'user',
        timestamps: true,
        paranoid: true,
        createdAt: 'createTime',
        updatedAt: 'updateTime',
        deletedAt: 'deleteTime',
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [
              {
                name: 'id',
              },
            ],
          },
        ],
      },
    )
  }
}
