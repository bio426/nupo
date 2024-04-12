#!/bin/bash

declare -A envs

# Tern
envs["TERN_CONFIG"]="tern.conf"
envs["TERN_MIGRATIONS"]="migrations/"

# App
envs["NUXT_AUTH_JWT_SECRET"]="my-secret"
envs["NUXT_AUTH_COOKIE_NAME"]="nupo-token"

# Postgres
envs["NUXT_PG_HOST"]="localhost"
envs["NUXT_PG_PORT"]="5432"
envs["NUXT_PG_USER"]="postgres"
envs["NUXT_PG_PASSWORD"]="password"
envs["NUXT_PG_DATABASE"]="nupo"

for env in "${!envs[@]}"; do
  export ${env}=${envs[${env}]}
done

echo "${#envs[@]} variables setted"

