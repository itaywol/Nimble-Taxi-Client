FROM node:10-alpine as builder

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

RUN apk --no-cache add python make g++ --silent



COPY package*.json ./
RUN npm install --silent


FROM node:10-alpine

WORKDIR /usr/src/app
RUN npm install -g serve

COPY --from=builder node_modules node_modules

COPY . .
