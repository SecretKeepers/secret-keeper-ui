pipeline{
    agent any
    tools {nodejs "NodeJS"}
    stages{
        stage('cloning repository'){
            steps{
                git branch: 'dev-Prem',
                       url: 'https://github.com/SecretKeepers/secret-keeper-service.git'
            }
        }
        stage('Installing Dependencies'){
            steps{
                bat 'npm install'
            }
        }
        stage('Running tests'){
            steps{
                bat 'npm test'
            }
        }
        stage('Deploying'){
            steps{
                bat 'npm start'
            }
        }
    }    
}
