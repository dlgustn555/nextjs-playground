#!/usr/bin/env sh

echo '================ green-app ReplicaSet 생성 ================'

docker build -t dlgustn555/ch03-05-green .
docker push dlgustn555/ch03-05-green

kubectl delete rs/green-replica-set
kubectl apply -f green.yaml

docker rmi $(docker images -f "dangling=true" -q)

