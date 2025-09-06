pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_DIR = "${WORKSPACE}" // root of your GitHub repo
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repo cleanly
                checkout([$class: 'GitSCM',
                          branches: [[name: '*/main']],
                          userRemoteConfigs: [[
                              url: 'https://github.com/NassimeElkamari/devops1.git',
                              credentialsId: 'github-credentials-id'
                          ]],
                          extensions: [[$class: 'WipeWorkspace']]])
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
                echo "Cleaning up unused Docker resources..."
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
