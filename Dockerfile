# Vue 依赖和构建
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json ./
# COPY pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build

# Nginx
FROM nginx:alpine AS prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# 构建镜像 限制512MB内存占用
# docker build -t config-docs .

# 运行镜像
# docker run -p 998:80 -it --name config-docs config-docs
