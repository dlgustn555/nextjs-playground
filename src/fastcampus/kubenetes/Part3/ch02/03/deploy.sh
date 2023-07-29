#!/usr/bin/env sh

echo 'blue 디렉토리로 이동'
cd blue


echo '========== blue ============='

echo 'blue Dockerfile 빌드'
echo 'build -t dlgustn555/blue .'
docker build -t dlgustn555/blue .

echo 'bule Docker Image PUSH!!'
echo 'docker push dlgustn555/blue'
docker push dlgustn555/blue

echo 'kubenetes Pod blue-pod 삭제'
echo 'kubectl delete pod blue-pod'
kubectl delete pod blue-pod

echo 'kubenetes Pod blue-pod 실행'
echo 'kubectl apply -f blue.yaml'
kubectl apply -f blue.yaml

echo '============ green ============'

echo 'green 디렉토리로 이동'
cd ../green

echo 'green Dockerfile 빌드'
echo 'build -t dlgustn555/green .'
docker build -t dlgustn555/green .

echo 'docker push dlgustn555/green'
docker push dlgustn555/green


echo 'kubenetes Pod green-pod 삭제'
echo 'kubectl delete pod green-pod'
kubectl delete pod green-pod

echo 'kubenetes Pod green-pod 실행'
echo 'kubectl apply -f green.yaml'
kubectl apply -f green.yaml

echo '============ red ============='

echo 'red 디렉토리로 이동'
cd ../red

echo 'red Dockerfile 빌드'
echo 'build -t dlgustn555/red .'
docker build -t dlgustn555/red .

echo 'docker push dlgustn555/red'
docker push dlgustn555/red

echo 'kubenetes Pod red-pod 삭제'
echo 'kubectl delete pod red-pod'
kubectl delete pod red-pod

echo 'kubenetes Pod red-pod 실행'
echo 'kubectl apply -f red.yaml'
kubectl apply -f red.yaml