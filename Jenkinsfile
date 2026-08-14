pipeline {
    agent any

    tools {
        nodejs 'NodeJS18'
    }

    environment {
        CI = 'true'
    }

    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --reporter=list,html'
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: true
                ])
            }
        }
    }

    post {

        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            archiveArtifacts artifacts: 'test-results/**', fingerprint: true
        }

        success {
            emailext(
                subject: "SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Playwright tests passed.\nBuild: ${env.BUILD_URL}",
                to: 'your-email@gmail.com'
            )
        }

        failure {
            emailext(
                subject: "FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Playwright tests failed.\nBuild: ${env.BUILD_URL}",
                to: 'your-email@gmail.com'
            )
        }
    }
}