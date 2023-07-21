pipeline {
    agent any
    stages {
        stage('Pull Codes from Github') {
            steps {
                checkout scm
            }
        }

        stage('Build Codes by Docker') {
            steps {
                sh 'docker build -t dlgustn555/nextjs-playground .'
            }
        }
    }
}