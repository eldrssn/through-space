FROM node:23-alpine3.20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ARG MODE

RUN npm run build -- --mode $MODE

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf