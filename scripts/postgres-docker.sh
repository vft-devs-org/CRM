docker pull postgres:alpine
docker run --name postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=mydatabase -p 5432:5432 -d postgres:alpine

# docker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=Root@1234 -e POSTGRES_DB=mydatabase -p 5432:5432 -d postgres:alpine
# docker run --name postgres -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres:alpine

# Command to access the PostGresCLi
docker exec -it postgres psql -U admin -d mydatabase
