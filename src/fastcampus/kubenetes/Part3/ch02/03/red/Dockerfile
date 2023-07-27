FROM node:18.16.1-alpine

USER root

RUN apk add --update curl && rm -rf /var/cache/apk/*

# 애를리케이션 디렉토리 생성
WORKDIR /app

COPY . .

EXPOSE 3303

CMD ["node", "red.js"]