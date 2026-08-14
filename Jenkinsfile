pipeline {
agent any

```
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
        echo 'Pipeline execution completed.'
    }

    success {
        echo 'Playwright tests passed successfully.'
    }

    failure {
        echo 'Playwright tests failed.'
    }
}
```

}
