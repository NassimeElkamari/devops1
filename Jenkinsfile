pipeline {
    agent any

    environment {
        REPO_DIR = "${WORKSPACE}/devops1"  // Directory to clone your repo
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Cloning GitHub repository..."
                sh 'rm -rf $REPO_DIR'  // Clear old checkout
                sh 'git clone -b main https://github.com/NassimeElkamari/devops1.git $REPO_DIR'
            }
        }

        stage('Build Docker Images') {
            steps {
                echo "Building backend, frontend, and Nginx Docker images..."
                dir("${REPO_DIR}") {
                    sh 'docker compose build'
                }
            }
        }

        stage('Run Containers') {
            steps {
                echo "Starting containers..."
                dir("${REPO_DIR}") {
                    sh 'docker compose up -d'
                }
            }
        }

        stage('Optional Test') {
            steps {
                echo "You can run backend/frontend tests here if needed..."
                // Example: dir("${REPO_DIR}") { sh 'docker compose run --rm backend npm test' }
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
