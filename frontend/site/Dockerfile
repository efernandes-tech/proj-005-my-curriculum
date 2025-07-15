# Step 1: Builder
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .
RUN npm install -g pnpm
RUN pnpm install --shamefully-hoist
RUN pnpm run build

# Step 2: Serve with nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
