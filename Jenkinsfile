node {
    /* Requires the Docker Pipeline plugin to be installed */
    docker.image('node:18.16.0-alpine').inside {
        stage('Test') {
            sh 'node --version'
        }
    }
}