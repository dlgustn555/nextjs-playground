FROM node:18.16.1-alpine

USER root

RUN apk add --update curl && rm -rf /var/cache/apk/*

WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["node", "sky.js"]