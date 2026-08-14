pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    tools {
        nodejs 'NodeJS18'
    }

    environment {
        PLAYWRIGHT_BROWSERS_PATH = 'C:\\playwright-browsers'
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
                bat 'npx playwright install chromium'
                bat 'npx playwright --version'
            }
        }

        stage('Run Jenkins Smoke Test') {
            steps {
                bat 'npx playwright test src/tests/jenkins.test.ts --reporter=list,html'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true, allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**', fingerprint: true, allowEmptyArchive: true
        }
    }
}
