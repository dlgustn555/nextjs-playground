#!/usr/bin/env sh

read -p "도커이미지 태그: " IMAGE_TAG

echo "==========> 입력된 도커이미지 태그: $IMAGE_TAG"

docker build -t dlgustn555/nextjs-playground:$IMAGE_TAG .
docker push dlgustn555/nextjs-playground:$IMAGE_TAG

helm uninstall nextjs-playground

helm install nextjs-playground ./helmChart --set IMAGE_TAG=$IMAGE_TAG