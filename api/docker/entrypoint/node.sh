#!/usr/bin/env bash
set -o errexit
set -o errtrace
set -o nounset
set -o pipefail

export PGPASSWORD="$POSTGRES_PASSWORD"

until psql \
    --host "$POSTGRES_HOST" \
    --username "$POSTGRES_USER" \
    --dbname "$POSTGRES_DB" \
    --command '\l' &>/dev/null; do
  echo "Waiting for PostgreSQL"
  sleep 1
done

exec "$@"
