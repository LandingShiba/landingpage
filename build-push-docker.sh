#!/bin/bash

# Exit on error
set -e

# Configuration - change these variables as needed
DOCKER_REGISTRY="docker.io"  # Change to your registry (e.g., "registry.example.com")
IMAGE_NAME="shiba-client"
IMAGE_TAG="latest"
DOCKERFILE_PATH="./Dockerfile.prd"

# Full image name
FULL_IMAGE_NAME="${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"

echo "===== Building Docker Image ====="
echo "Image: ${FULL_IMAGE_NAME}"
echo "Using Dockerfile: ${DOCKERFILE_PATH}"

# Build the Docker image
docker build -t ${FULL_IMAGE_NAME} -f ${DOCKERFILE_PATH} .

echo "===== Docker Image Built Successfully ====="
docker images | grep ${IMAGE_NAME}

# Push to registry
echo "===== Pushing to Docker Registry ====="
echo "Registry: ${DOCKER_REGISTRY}"

# Uncomment if you need to log in to the registry
# echo "Logging in to Docker registry..."
# docker login ${DOCKER_REGISTRY}

docker push ${FULL_IMAGE_NAME}

echo "===== Docker Image Pushed Successfully ====="
echo "Image available at: ${FULL_IMAGE_NAME}"
