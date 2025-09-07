pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/NassimeElkamari/devops1.git',
                    credentialsId: 'github-credentials-id'
            }
        }

        stage('Build') {
            steps {
                echo "Building..."
            }
        }
    }

    post {
        failure {
            echo "Pipeline failed! ❌"
        }
        success {
            echo "Pipeline succeeded! ✅"
        }
    }
}
