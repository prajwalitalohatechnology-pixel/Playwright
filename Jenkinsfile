pipeline {
    agent any

    tools {
        nodejs 'NodeJS18'
    }

    environment {
        PLAYWRIGHT_BROWSERS_PATH = 'C:\\playwright-browsers'
    }

    stages {

        stage('Debug Environment') {
            steps {
                bat 'echo Workspace: %WORKSPACE%'
                bat 'node -v'
                bat 'npm -v'
                bat 'npx playwright --version'
                bat 'echo Browser Path: %PLAYWRIGHT_BROWSERS_PATH%'
                bat 'dir C:\\playwright-browsers'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --reporter=list'
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
    }
}