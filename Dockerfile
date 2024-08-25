# Vue 依赖和构建
FROM node:20-alpine AS build
RUN echo "https://mirrors.aliyun.com/alpine/v3.19/main/" > /etc/apk/repositories
RUN apk add --no-cache git
WORKDIR /app
COPY package.json ./
# COPY pnpm-lock.yaml ./
RUN npm config set registry=https://registry.npmmirror.com
RUN npm install -g pnpm
RUN pnpm config set registry=https://registry.npmmirror.com
RUN pnpm install
COPY . .
RUN pnpm build

# Nginx
FROM nginx:alpine AS prod-stage
COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# 构建镜像 限制512MB内存占用
# docker build -t purp1e/config-docs:latest .

# 运行镜像
# docker run -p 998:80 -it --name config-docs config-docs

# docker buildx build --platform linux/x86_64 -t purp1e/config-docs:latest .
