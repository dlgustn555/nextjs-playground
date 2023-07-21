node {
    /* Requires the Docker Pipeline plugin to be installed */
    docker.image('node:18.16.1').inside {
        stage('Pull Code from GitHub') {
            checkout scm
        }

        stage('Docker Image Build') {
            sh 'docker build -t nextjs-app .'
        }
    }
}