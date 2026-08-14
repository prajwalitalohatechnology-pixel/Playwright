pipeline {
    agent any

    tools {
        nodejs 'NodeJS18'
    }

    environment {
        PLAYWRIGHT_BROWSERS_PATH = 'C:\\playwright-browsers'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install chromium'
                bat 'npx playwright --version'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
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

pipeline {
    agent any
    
    triggers {
        GenericTrigger(
            genericVariables: [
                // 1. Extract a specific string property from the JSON
                [
                    key: 'gitReference', 
                    value: '$.ref', 
                    expressionType: 'JSONPath',
                    defaultValue: 'refs/heads/main'
                ],
                // 2. Extract the entire raw JSON payload text
                [
                    key: 'rawPayload', 
                    value: '$', 
                    expressionType: 'JSONPath',
                    defaultValue: '{}'
                ]
            ],
            // A secure unique token so Jenkins knows exactly which job to trigger
            token: 'MY_SECRET_JENKINS_JOB_TOKEN', 
            
            // Optional: Print variables to the build log to simplify debugging
            printContributedVariables: true,
            printPostContent: true
        )
    }

    stages {
        stage('Read Payload Metadata') {
            steps {
                // Accessing the specific extracted JSONPath property
                echo "The webhook triggered a build for reference: ${env.gitReference}"
                
                // Parsing the entire raw JSON payload to extract dynamic data
                script {
                    def jsonPayload = readJSON text: env.rawPayload
                    
                    // Access a nested property (e.g., repository name from GitHub/Bitbucket)
                    if (jsonPayload.repository && jsonPayload.repository.name) {
                        echo "Repository Name: ${jsonPayload.repository.name}"
                    }
                }
            }
        }
    }
}
