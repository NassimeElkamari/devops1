pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    userRemoteConfigs: [[
                        url: 'https://github.com/NassimeElkamari/devops1.git',
                        credentialsId: 'github-credentials-id'
                    ]]
                ])
            }
        }

        stage('Build') {
            steps {
                echo "✅ Build stage running..."
                // Add any build steps here (npm install, mvn compile, etc.)
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    // Check Docker availability and permissions
                    try {
                        // Try without sudo first
                        sh 'docker compose up -d'
                    } catch (Exception e) {
                        echo "Docker command failed, trying with sudo..."
                        // Try with sudo (requires passwordless sudo setup)
                        sh 'sudo docker compose up -d'
                    }
                }
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