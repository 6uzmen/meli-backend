# MercadoLibre Backend

# TypeScript + Express.js

# Environment vars

This project uses the following environment variables:

| Name            | Default Value                |
| --------------- | ---------------------------- |
| SERVER_PORT     | 3000                         |
| ML_API_URL      | https://api.mercadolibre.com |
| AUTHOR_NAME     |                              |
| AUTHOR_LASTNAME |                              |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 16.6.2

# Getting started

- Install dependencies

```
yarn install
```

- Build and run the project

```
yarn start
```

## Project Structure

| Name                | Description                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| **dist**            | Contains the distributable (or output) from your TypeScript build.                               |
| **node_modules**    | Contains all npm dependencies                                                                    |
| **src**             | Contains source code that will be compiled to the dist dir                                       |
| **src/apis**        | External API calls.                                                                              |
| **src/controllers** | Controllers define functions to serve various express routes.                                    |
| **src/middlewares** | Express middlewares which process the incoming requests before handling them down to the routes  |
| **src/routes**      | Contain all express routes                                                                       |
| **src/tests**       | Unit tests                                                                                       |
| **src/utils**       | Helpfull functions used in the Application                                                       |
| **src**/server.ts   | Entry point to express app                                                                       |
| package.json        | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped) |
| tsconfig.json       | Config settings for compiling source code only written in TypeScript                             |
| tslint.json         | Config settings for TSLint code style checking                                                   |
| prettier.rc         | Config settings for Prettier code style checking                                                 |
| nodemon.json        | Config settings for to run App with Nodemon                                                      |
