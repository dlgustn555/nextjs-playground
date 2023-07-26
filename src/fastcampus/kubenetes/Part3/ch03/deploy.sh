#!/usr/bin/env sh

echo 'blue 디렉토리로 이동'
cd blue


echo '========================='

echo 'blue Dockerfile build'
echo 'build -t dlgustn555/blue'

docker build -t dlgustn555/blue

echo '========================='

echo 'green 디렉토리로 이동'
cd ../green

echo '========================='

echo 'green Dockerfile build'
echo 'build -t dlgustn555/green'

docker build -t dlgustn555/green

echo '========================='

echo 'red 디렉토리로 이동'
cd ../red

echo '========================='

echo 'red Dockerfile build'
echo 'build -t dlgustn555/red'

docker build -t dlgustn555/red

echo '========================='

echo '이미지 푸시'
echo 'docker push dlgustn555/blue'
echo 'docker push dlgustn555/green'
echo 'docker push dlgustn555/red'