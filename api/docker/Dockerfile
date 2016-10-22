FROM node:6

RUN useradd --shell /bin/bash \
            --create-home \
            node

ARG DEBIAN_FRONTEND="noninteractive"

RUN apt-get update && \
    apt-get install --yes --no-install-recommends apt-utils && \
    apt-get dist-upgrade --yes && \
    apt-get autoremove --yes && \
    apt-get autoclean --yes && \
    rm -rf /var/lib/apt/lists/*

RUN apt-get update && \
    apt-get install --yes --no-install-recommends \
    libpq-dev \
    postgresql-client \
    git && \
    rm -rf /var/lib/apt/lists/*


RUN mkdir -p /app
COPY ./ /app
COPY docker/ /app/docker/
RUN chown -R node:node /app && \
    chmod -R 0777 /app
VOLUME /app


USER node
WORKDIR /app
RUN npm install

ENTRYPOINT ["docker/entrypoint/node.sh"]
CMD ["node"]
