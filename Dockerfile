# 使用官方的 Node.js 镜像作为基础镜像
FROM node:16.14.2-bullseye-slim

# 设置工作目录
WORKDIR /app

# 复制项目的所有文件到工作目录
COPY . .

# 安装项目依赖
RUN npm install --registry https://registry.npmmirror.com

# 暴露端口（使用默认端口，实际运行时会根据环境变量调整）
EXPOSE 3000

# 设置环境变量的默认值
ENV NODE_ENV=development

# 设置默认命令来执行启动脚本
CMD ["node", "./src/bin/www"]
