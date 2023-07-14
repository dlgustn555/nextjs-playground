FROM node:16.17.1

USER root

WORKDIR /app

RUN npm i -g yarn

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

RUN yarn build
CMD ["yarn", "start"]