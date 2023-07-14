FROM node:16.17.1

WORKDIR /app

RUN yarn install

WORKDIR /app

RUN npm i -g yarn

COPY package.json yarn.locak ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

RUN yarn build
CMD ["yarn", "start"]