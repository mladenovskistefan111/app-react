# React Application

This repository contains the source code for a React application, along with the necessary configurations for building and deploying the application using Docker and GitHub Actions.

## Repository Contents

- **Source Code**: The main logic of the React application is implemented in this repository.
- **Dockerfile**: A Dockerfile is included to build a Docker image of the React application for easy deployment.
- **Jenkinsfile**: The Jenkinsfile is configured to facilitate continuous integration (CI) for the application, automating the build and testing processes.
- **GitHub Actions Workflow**: This workflow automates versioning based on commit messages. It updates the Docker image tag as follows:
  - If the commit message is anything other than "patch" or is just "patch," the version increments as a patch (e.g., from `v1.0.0` to `v1.0.1`, then to `v1.0.2`).
  - If the commit message is "minor," the version increments as a minor version (e.g., from `v1.0.2` to `v1.1.0`, then to `v1.2.0`).
  - If the commit message is "major," the version increments as a major version (e.g., from `v1.2.0` to `v2.0.0`, then to `v3.0.0`).

## Getting Started

To get started with the React application, clone this repository and follow the instructions in the Dockerfile to build and run the application.

```bash
git clone https://github.com/mladenovskistefan111/app-react.git
cd app-react
