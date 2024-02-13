#!/bin/bash
git reset --hard
git pull
docker compose down
docker image rm put-n-go-frontend
docker container rm putngo-front
docker compose up -d
