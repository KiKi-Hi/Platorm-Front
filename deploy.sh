#!/bin/bash
IMAGE_NAME="kikihistore/front"
CONTAINER_NAME="latest"

# 최신 이미지 가져오기
docker pull $IMAGE_NAME:latest

# 실행 중인 컨테이너가 있다면 중지 및 제거
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# 새 컨테이너 실행
docker run -d \
    --name $CONTAINER_NAME \
    -p 80:80 \
    $IMAGE_NAME:latest