## 代码结构

四层架构

Router

Controller

Service

Dao

## 错误处理

自定义错误类 util/models CustomError

自定义中间件 middleware/errorHandle

-错误抛出

--进入 errorHandle

---是否是 CustomError

----是：设置 http 状态码 200，返回 CustomResponse 错误响应

----否：设置 http 状态码 500，进入 koa-onerror 处理，自动返回错误信息 html

## 响应规范处理

自定义错误类 util/models CustomResponse

自定义中间件 middleware/responseHandle

Controller层设置 ctx.body

-ctx.body = xxx

--返回 CustomResponse {"code":200,"data":xxx,"msg":"操作成功!"}

-不设置

--返回 CustomResponse {"code":200,"data":null,"msg":"操作成功!"}

-ctx.body = CustomResponse

--返回设置的 CustomResponse

## 日志

基于 winston

主要代码：src/core/logger

请求/响应/错误的日志，已自动打印

占位符语法：

%s: 插入字符串值。

%j: 插入 JSON 对象，并自动转换为 JSON 字符串。

%o: 插入一个对象，不自动转换为 JSON 字符串，而是保留对象的格式。

%d: 插入整数值。

%f: 插入浮点数值。

例如：logger.error("Server error %s", err);

## 包管理器

推荐pnpm

## eslint

配置文件: ./eslint.config.js

已自动接入prettier

## prettier

配置文件: ./.prettierrc.js

## 环境变量

cross-env: 跨操作系统设置变量

dotenv: 注入环境变量

## 配置文件

config: 自动识别NODE_ENV环境变量注入配置信息

文件: ./src/config/xxxx.yml

## 开发环境 nodemon

配置文件: ./nodemon.json

## 生产环境 pm2

配置文件: ./ecosystem.config.js

## 数据库

mysql

ORM工具: Sequelize

配置文件: ./src/core/db/mysql

Sequelize模型: ./src/project/model

自动生成Sequelize模型: 基于sequelize-auto;

`npm run sequelize:auto`

## 打包可执行文件

pkg

打包后文件输出在./dist

windows包: nodejs-web-server-win.exe

linux包: nodejs-web-server-linux

运行方式:

windows:

CMD:

`set NODE_ENV=xxxx && ./nodejs-web-server-win.exe`

PowerShell:

`$env:NODE_ENV="xxxx"; ./nodejs-web-server-win.exe`

linux:

`NODE_ENV=xxxx ./nodejs-web-server-win.exe`

## commitlint校验

配置文件: ./commitlint.config

## husky

提交前 eslint + commitlint

## docker部署

配置文件: ./Dockerfile

构建镜像:

`docker build -t [镜像名称]:[镜像标签] .`

运行容器:

`docker run -p [主机映射端口]:3000 -e TZ=Asia/Shanghai -e NODE_ENV=[环境变量] -v [主机映射路径]:/app/logs -itd --name [容器名称] [镜像名称]`

注释:

-i：保持标准输入打开

-t：分配一个伪终端

-d：在后台运行容器

## 待完成

静态资源服务器

日志traceId链路追踪
