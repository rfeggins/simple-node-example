pipeline {
  agent any

  parameters {
      string(name: 'Version',
      defaultValue: '1.0.0',
      description:  'This is a new parameter')
  }

  stages {
    stage (‘Checkout’) {
      steps {
        checkout scm
      } //End Checkout
    }
    stage (‘Test’) {
      steps {
        script {
            sh '''
             node -v
             echo env
             npm install
            '''
        } //END Script section
      } // END Steps secton
    } // End Build Stage

  } //END STAGES Section

} //END PIPELINE
