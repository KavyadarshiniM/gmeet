pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                echo 'Building backend Docker image...'
                bat 'docker compose build backend'
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building frontend Docker image...'
                bat 'docker compose build frontend'
            }
        }

        stage('Stop Old Containers') {
            steps {
                echo 'Stopping old containers...'
                bat 'docker compose down'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying all services...'
                bat 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}