#!/usr/bin/env sh

docker build -t playground-app .

cd nginx

docker build -t playground-nginx .

cd ../

docker-compose down

docker-compose up -d