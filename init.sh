chmod +x ./docker/init.sh
docker compose -f ./docker/docker-compose.yaml up -d
npm run start:dev