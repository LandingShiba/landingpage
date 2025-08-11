# ================== Configuration ==================
$DOCKER_REGISTRY = "docker.io"                 # Registry
$DOCKER_USERNAME = "ntu11022002"               # Docker Hub username
$IMAGE_NAME = "$DOCKER_USERNAME/shiba-client"  # Full image name with username
$IMAGE_TAG = "latest"
$DOCKERFILE_PATH = "./Dockerfile.prd"

# Full image name
$FULL_IMAGE_NAME = "${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"

# ================== Clean build cache ==================
Write-Host "===== Pruning Docker build cache =====" -ForegroundColor Yellow
docker builder prune -af
if ($LASTEXITCODE -ne 0) {
    Write-Host "Cache prune returned a non-zero exit code (tiếp tục build)." -ForegroundColor DarkYellow
}

# ================== Build Docker Image ==================
Write-Host "===== Building Docker Image (no cache) =====" -ForegroundColor Green
Write-Host "Image: ${FULL_IMAGE_NAME}" -ForegroundColor Cyan
Write-Host "Using Dockerfile: ${DOCKERFILE_PATH}" -ForegroundColor Cyan

docker build --no-cache -t ${FULL_IMAGE_NAME} -f ${DOCKERFILE_PATH} .

if ($LASTEXITCODE -ne 0) {
    Write-Host "Docker build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "===== Docker Image Built Successfully =====" -ForegroundColor Green
docker images | Where-Object { $_ -match "shiba-client" }

# ================== Login to Docker Registry ==================
Write-Host "===== Logging in to Docker Registry =====" -ForegroundColor Yellow
docker login $DOCKER_REGISTRY

if ($LASTEXITCODE -ne 0) {
    Write-Host "Docker login failed!" -ForegroundColor Red
    exit 1
}

# ================== Push to Docker Registry ==================
Write-Host "===== Pushing to Docker Registry =====" -ForegroundColor Green
docker push ${FULL_IMAGE_NAME}

if ($LASTEXITCODE -ne 0) {
    Write-Host "Docker push failed!" -ForegroundColor Red
    exit 1
}

Write-Host "===== Docker Image Pushed Successfully =====" -ForegroundColor Green
Write-Host "Image available at: ${FULL_IMAGE_NAME}" -ForegroundColor Cyan
