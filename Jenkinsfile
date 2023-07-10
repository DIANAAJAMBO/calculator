pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building'
      }
    }

    stage('Test') {
      steps {
        echo 'Testing'
        sh '''npx i npm latest
npm test'''
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying'
      }
    }

  }
}