#!/usr/bin/env sh

git pull

docker-compose down

docker-compose build

docker-compose up -d