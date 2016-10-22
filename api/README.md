# Read Me

    docker build --tag=leisurehack/api:latest -f docker/Dockerfile .

    cp docker/env/app.env.dist docker/env/app.env
    cp docker/env/postgres.env.dist docker/env/postgres.env

    docker-compose -f docker-compose.yml -f docker-compose.dev.yml run npm install
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

    open http://0.0.0.0:8080/
