FROM node:16.17.1

USER root

WORKDIR /app

#RUN npm i -g yarn

# 패키지 설치 관련 도커 컨테이러 레이러를 별도로 가지기 위해서,
# 변경된 부분만 새로 설치하고, 나머진 캐시된 것을 사용한다.
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# 소스 코드 관련
COPY . .
 
# 해당 도커를 이미지를 사용하는 사용자에게 해당 도커 이미지가 3000 포트를 사용한다고 알려준다.
# 단지 문서로 알려 주는 용도!!
EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]