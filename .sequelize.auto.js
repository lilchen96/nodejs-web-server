const SequelizeAuto = require('sequelize-auto')

const info = {
  host: '127.0.0.1',
  port: '3306',
  username: 'root',
  password: 'root',
  database: 'nodejs-web-server',
  dialect: 'mysql',
  directory: './sequelize-auto-models',
  tables: undefined,
  skipTables: [],
}

const auto = new SequelizeAuto(info.database, info.username, info.password, {
  host: info.host,
  dialect: info.dialect,
  port: info.port,
  directory: info.directory, // where to write files
  caseModel: 'p', // 设置模型名称的大小写：'c' (camelCase), 'l' (lower_case), 'o' (original), 'p' (PascalCase), 'u' (UPPER_CASE)
  caseProp: 'c', // 设置属性名称的大小写：'c' (camelCase), 'l' (lower_case), 'o' (original), 'p' (PascalCase), 'u' (UPPER_CASE)
  caseFile: 'p', // 设置文件名称的大小写：'c' (camelCase), 'l' (lower_case), 'o' (original), 'p' (PascalCase), 'u' (UPPER_CASE), 'k' (kebab-case)
  lang: 'es6', // 生成模型的语言：'es5', 'es6', 'esm', 'ts'
  singularize: true, // 单数化模型和文件名
  additional: {
    timestamps: true,
    createdAt: 'createTime',
    updatedAt: 'updateTime',
    paranoid: true,
    deletedAt: 'deleteTime',
  },
  tables: info.tables,
  skipTables: info.skipTables,
})

auto.run().then((data) => {
  // console.log(data.tables)
  console.log('模型创建成功!')
})
