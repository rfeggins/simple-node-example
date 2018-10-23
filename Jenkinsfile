pipeline {
  agent any

  tools {
      maven 'm3'
  }

  parameters {
      string(name: 'Version',
      defaultValue: '1.0.0',
      description:  'This is a new parameter')
  }

  stages {
    stage (‘Checkout’)
    {
      steps {
          checkout scm
      }
    }
    stage (‘Test’) {
        steps {
          env.NODE_ENV = “test”
          print “Environment will be : ${env.NODE_ENV}”
          sh ‘node -v’
          sh ‘npm install’
        }
    }
  }
}
