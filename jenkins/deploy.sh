#!/usr/bin/env sh

mkdir ~/jenkins
cd ~/jenkins

docker run --name jenkins -d -p 8080:8080 -v ~/jenkins:/var/jenkins_home -u root jenkins/jenkins:latest
