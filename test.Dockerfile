FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .

RUN apk update
RUN apk add bash

RUN npm ci --no-audit

EXPOSE 8080

CMD [ "npm", "start", "&", "npm", "test" ]