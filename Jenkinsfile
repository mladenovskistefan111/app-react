pipeline {
    agent any

    environment {
        DOCKERHUB_CREDS = credentials('dockerhub-token')
        GITHUB_CREDS = credentials('github-token') 
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the GitHub repository with the specified credentials
                git credentialsId: 'github-token', url: 'https://github.com/mladenovskistefan111/app-react', branch: 'dev'
            }
        }

        stage('Get Latest Git Tag') {
            steps {
                script {
                    def latestTag = sh(script: "git describe --tags --abbrev=0", returnStdout: true).trim()

                    if (latestTag == '') {
                        latestTag = 'v1.0.0'
                    }

                    def (major, minor, patch) = latestTag.replace('v', '').tokenize('.')
                    def newPatch = patch.toInteger() + 1
                    def newTag = "v${major}.${minor}.${newPatch}"

                    env.NEW_TAG = newTag
                    echo "New Docker tag: ${newTag}"

                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker --version'
                }
            }
        }

        stage('Tag Image') {
            steps {
                script {
                    sh "docker tag mladenovskistefan/app-react:latest mladenovskistefan/app-react:${env.NEW_TAG}"
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-token', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                        // Push both the 'latest' and the new versioned tags to DockerHub
                        sh 'docker push mladenovskistefan/app-react:latest'
                        sh "docker push mladenovskistefan/app-react:${env.NEW_TAG}"
                    }
                }
            }
        }
    }

    post {
        failure {
            echo 'Build failed!'
        }
        success {
            echo 'Build succeeded!'
        }
    }
}
