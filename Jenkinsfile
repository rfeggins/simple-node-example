pipeline {
  agent any

  // this tools stages verifies that node has been installed

  tools {nodejs "node"}

  stages {
     stage('Pre-buid') {
        steps {
          sh 'npm config ls'
        }
     }
  }

}
