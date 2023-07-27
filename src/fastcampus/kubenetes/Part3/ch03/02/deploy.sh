#!/usr/bin/env sh

echo '================ blue-app ReplicaSet 생성 ================'

docker build -t dlgustn555/ch03-02-blue
docker push dlgustn555/ch03-02-blue

kubectl delete replicaSet
kubectl apply -f blue.yaml

docker rmi $(docker images -f "dangling=true" -q)
