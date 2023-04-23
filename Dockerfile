FROM node:latest

# 定义工作目录
WORKDIR /app

COPY package*.json ./

# 将应用程序文件复制到容器内的工作目录中
COPY . .

# 安装应用程序所需的依赖项
RUN npm install

# 定义应该公开的端口
EXPOSE 81

# 定义容器启动时运行的命令
CMD [ "npm", "run", "serve" ]
