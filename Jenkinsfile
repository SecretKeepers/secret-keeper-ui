pipeline{
    agent{
        docker{
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages{
        stage('Build'){
            steps{
                dir('C:/ProgramData/Jenkins/.jenkins/workspace/secret-keeper-ui/.git') {
                  sh 'npm install'
                }
            }
        }
    }    
}
