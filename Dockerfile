# Vue 依赖和构建
FROM oven/bun:alpine AS build
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
RUN apk add --no-cache git
WORKDIR /app
COPY package.json ./
RUN bun install --registry=https://registry.npmmirror.com
COPY . .
RUN bun run build

# Nginx
FROM nginx:alpine AS prod-stage

COPY --from=build /app/docs/.vitepress/dist /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# 构建镜像 限制512MB内存占用
# docker build -t purp1e/config-docs:latest .

# 运行镜像
# docker run -p 998:80 -it --name config-docs config-docs

# docker buildx build --platform linux/x86_64 -t purp1e/config-docs:latest .
