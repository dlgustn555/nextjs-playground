#!/usr/bin/env sh

echo '================ hello POD 배포 ================'
cd hello

docker build -t dlgustn555/hello .
docker push dlgustn555/hello

kubectl delete pod hello-pod
kubectl apply -f hello.yaml


echo '================ rose POD 배포 ================'
cd ../rose

docker build -t dlgustn555/rose .
docker push dlgustn555/rose

kubectl delete pod/rose-pod
kubectl apply -f rose.yaml

echo '================ sky POD 배포 ================'
cd ../sky

docker build -t dlgustn555/sky .
docker push dlgustn555/sky

kubectl delete pod/sky
kubectl apply -f sky.yaml
