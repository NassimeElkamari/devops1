pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Explicit checkout with credentials
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],  // change to */master if needed
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
                sh 'docker compose up -d'
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
