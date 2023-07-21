pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                // 1. git에서 소스 코드를 가져옴
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // 2. Docker 이미지를 빌드함
                sh 'docker build -t nextjs-app .'
            }
        }
        
        stage('Push Docker Image') {
            steps {
                // 3. 빌드한 Docker 이미지를 192.168.56.101에 푸시함
                sh 'docker tag nextjs-app 192.168.56.101/nextjs-app:latest'
                sh 'docker push 192.168.56.101/nextjs-app:latest'
            }
        }
        
        stage('Run Docker Image') {
            steps {
                // 4. 192.168.56.101에 푸시된 Docker 이미지를 실행함
                sh 'docker run -d -p 8080:80 192.168.56.101/nextjs-app:latest'
            }
        }
    }
}
