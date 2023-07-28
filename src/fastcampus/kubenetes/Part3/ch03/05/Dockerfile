FROM node:18.16.1-alpine

USER root

RUN apk add --update curl && rm -rf /var/cache/apk/*

WORKDIR /app

COPY . .

ENV VERSION=1.0

EXPOSE 8080

CMD ["node", "green.js"]