node {
    /* Requires the Docker Pipeline plugin to be installed */
    docker.image('node:18.16.1').inside {
        stage('Test') {
            sh 'node --version'
        }
    }
}