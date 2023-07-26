FROM node:18.16.1-alpine

USER root

RUN apt-get update && apt-get install -y curl

# 애를리케이션 디렉토리 생성
WORKDIR /app

COPY . .

EXPOSE 3301

CMD ["node", "blue.js"]