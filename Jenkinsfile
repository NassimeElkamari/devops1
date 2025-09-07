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
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d'  // Changed to use hyphen
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