# Nupo
My strongly opinionated, Nuxt 3 template

## Features
-  Simple authentication based in `jsonwebtokens`
-  Postgres database integration
-  Deploy the application in any environment that supports docker containers

## Why


I needed a simple to use template to easily develop and deploy applications that can be indexed by search engines and use it to create web pages or portfolios quickly.

## Try it now!

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
git clone git@github.com:bio426/nupo.git <your-directory-name>
cd <your-directory-name>
npm i
```

### Set up your environment variables for development

Create a file called `env.sh` with the same content as `env.example.sh` and replace the required environment variables

### Run database migrations

You can use the [tern](https://github.com/jackc/tern) tool to run the migrations inside the `migrations` directory

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Create the bash file and set your variables in `env.sh`
- [ ] Change the name in `package.json`
- [ ] Change the head title in `nuxt.config.ts`
- [ ] Change the favicon in `public`
- [ ] Remove the `.git` folder
- [ ] Initialize your own git repository

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3000

```bash
source env.sh && npm run dev
```

### Build

To build the App, run

```bash
npm run build
```

And you will see the generated file in `.output` that ready to be served.

### Docker Production Build

First, build the vitesse image by opening the terminal in the project's root directory.

```bash
docker build . -t nupo:latest
```

Run the image and specify port mapping with the `-p` flag.

```bash
docker run --rm -it -p 8080:80 \
	-e NUXT_AUTH_JWT_SECRET="your-secret"
	-e NUXT_AUTH_COOKIE_NAME="your-token-name"
	-e NUXT_PG_HOST="your-db-host"
	-e NUXT_PG_PORT="your-db-port"
	-e NUXT_PG_USER="your-db-user"
	-e NUXT_PG_PASSWORD="your-db-password"
	-e NUXT_PG_DATABASE="your-db-database"
	nupo:latest
```

