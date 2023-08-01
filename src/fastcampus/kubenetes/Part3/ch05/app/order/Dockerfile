############## STAGE 1 ##############
FROM node:18.16.1-alpine AS base

USER root

RUN 

WORKDIR /app

COPY ./package.json ./pakcage-lock.json ./

############## STAGE 2 ##############
FROM base AS build

RUN npm install --frozen-lockfile

############## STAGE 3 ##############
FROM base AS release

# 소스 코드 관련 도커 컨테이너 레이어
COPY --from=build /app/node_modules ./node_modules

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]