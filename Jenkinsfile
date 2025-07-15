pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                echo 'Repository cloned automatically by Jenkins.'
            }
        }

        stage('Build with Docker Compose') {
            steps {
                echo 'Building frontend, backend, and MySQL with Docker Compose...'
                sh 'docker-compose up -d --build'
            }
        }

        stage('Verify Services') {
            steps {
                echo 'Listing running Docker containers...'
                sh 'docker ps'
            }
        }
    }
}
