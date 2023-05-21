# NeuralClock Backend

## Description

NeuralClock backend services wich provides a Graphql API. Operate with NestJS framework, Postgres DB, Cognito to secure the API

## Requirements

The following softwares are required to run this project

- [NodeJS](https://nestjs.com/) - Version 18.X.X or above (You can use [NVM](https://github.com/nvm-sh/nvm) for installation)
- [Postgres](https://www.postgresql.org/) - Version 14.X
- [Recommended] [Docker](https://www.docker.com/) - Version 20.10.X

## Environment Variables

```bash
STATE=
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=
DB_USERNAME=
API_PORT=
COGNITO_USER_POOL_ID=
COGNITO_CLIENT_ID=
```

## Build

Replace .env.template to .env for development or to .env.prod to production.

### Enviroment dev

```bash
docker-compose build
```

### Enviroment prod

```bash
docker-compose -f docker-compose.prod.yml --env-file .env.prod --build
```

## Run

### Enviroment dev

```bash
docker-compose up -d
```

### Enviroment prod

```bash
docker-compose -f docker-compose.prod.yml --env-file .env.prod up -d
```

## PG Admin

1. Login with `USER_PG_ADMIN` and `PASSWORD_PG_ADMIN` environment's values to the next url

```bash
http://localhost:${PG_EXTERNAL_PORT}
# If you PG_EXTERNAL_PORT = 5050 (variable in .env file)
http://localhost:5050
```

2. Add new Server. Then, in the `General tab` add a custom name. For example

```bash
# General tab
Name: neuralclock-db
```

3. In `Connection tab`, add host name/address. For this, you need to know the ip address from the container db. Run the next command ( but first, you need the container's id (db container) )

```bash
# Connection tab
# if you id from the container db is "e9a2c88946a6301d675620c83fea219bda937c8dd5a4e9677e174c7b71d9960f" run

docker inspect e9a2c88946a6301d675620c83fea219bda937c8dd5a4e9677e174c7b71d9960f
>>>
[
        ............
            "Networks": {
                "neuralvlovk-backend_neuralclock-network": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "db_neuralclock_container",
                        "db",
                        "bba376546187"
                    ],
                    "NetworkID": "71a46b481d8f8175cf0ebae32804ab549748c04353d2032222e912aa77dcf684",
                    "EndpointID": "ef89f9730a2e3e11f56df6655ef6ce77aaf4c6e89d5a9aff7be44c8450fe1fb8",
                    "Gateway": "172.27.0.1",
                    "IPAddress": "172.27.0.3",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:1b:00:03",
                    "DriverOpts": null
                }
            }
        ............
]

# In this case your "IPAddress" is "172.27.0.3"
```

4. In the `Connection Tab`. Add the port from your `DB_PORT`. Then add `Username` and `Password` from the `DB_USERNAME` and `DB_PASSWORD` accordingly. Finally save the server!

## Apollo Server

```bash
http://localhost:${API_PORT}/graphql
```

## Authors

- [@Jaime Rodriguez](https://github.com/jaimeRodriguezg)
