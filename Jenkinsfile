pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_DIR = "${WORKSPACE}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/NassimeElkamari/devops1.git',
                    credentialsId: 'github-credentials-id'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Test') {
            steps {
                echo "Add your tests here"
            }
        }
    }

    post {
        success {
            echo "Pipeline finished successfully!"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
