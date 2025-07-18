#!/bin/bash
IMAGE_NAME="kikihistore/front"
CONTAINER_NAME="front"
HOST_PORT=3000
IMAGE_TAG=${IMAGE_TAG:-latest}

echo "Deploying $IMAGE_NAME:$IMAGE_TAG"
docker pull $IMAGE_NAME:$IMAGE_TAG

EXISTING=$(docker ps -aq -f name=^${CONTAINER_NAME}$)
if [ -n "$EXISTING" ]; then
  echo "Removing old container"
  docker stop $CONTAINER_NAME || true
  docker rm $CONTAINER_NAME || true
fi

docker run -d \
  --name $CONTAINER_NAME \
  -p $HOST_PORT:80 \
  $IMAGE_NAME:$IMAGE_TAG