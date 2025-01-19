docker pull redis:alpine
docker run --name redis -p 6379:6379 -d redis:alpine

# command to access redis cli
docker exec -it redis redis-cli
