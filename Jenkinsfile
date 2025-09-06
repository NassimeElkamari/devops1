pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_DIR = "${WORKSPACE}"  // The root of your GitHub repo
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
                echo "Building backend, frontend, and Nginx Docker images..."
                dir("${DOCKER_COMPOSE_DIR}") {
                    sh 'docker compose build'
                }
            }
        }

        stage('Run Containers') {
            steps {
                echo "Starting containers..."
                dir("${DOCKER_COMPOSE_DIR}") {
                    sh 'docker compose up -d'
                }
            }
        }

        stage('Test') {
            steps {
                echo "Optional: add tests here"
                // Example: run backend tests
                // sh 'docker compose run --rm backend npm test'
            }
        }

        stage('Cleanup (Optional)') {
            steps {
                echo "Cleaning up unused images and containers..."
                sh 'docker system prune -f'
            }
        }
    }

    post {
        success {
            echo "Pipeline finished successfully! 🚀"
        }
        failure {
            echo "Pipeline failed! ❌"
        }
    }
}
