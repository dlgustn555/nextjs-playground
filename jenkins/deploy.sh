#!/usr/bin/env sh

git pull

mkdir ~/jenkins
cd ~/jenkins

# docker run --name jenkins -d -p 8080:8080 -v ~/jenkins:/var/jenkins_home -u root jenkins/jenkins:latest

dcoerk-compose down

docker-compose up -d

docker rmi $(docker images -f "dangling=true" -q)
