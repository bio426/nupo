FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .

## INSTALL DEPENDENCIES AND BUILD
RUN npm install
RUN npm run build

# BUILD SERVER
FROM golang:alpine as builder-sv
WORKDIR /app
COPY . .

## INSTALL DEPENDENCIES AND BUILD
RUN go mod download
RUN go build -o ./bin/main ./main.go

# RUN
FROM node:lts-alpine

ENV NITRO_PORT="8080"
ENV NUXT_PG_HOST="localhost"
ENV NUXT_PG_PORT="5432"
ENV NUXT_PG_USER="postgres"
ENV NUXT_PG_PASSWORD="password"
ENV NUXT_PG_DATABASE="nupo"

WORKDIR /app
COPY --from=builder /app/.output .

EXPOSE 8080

CMD ["node","server/index.mjs"]
