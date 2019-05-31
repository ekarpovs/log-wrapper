# Gateway API for web applications

[![CircleCI](https://circleci.com/gh/ekarpovs/web-app-api-gtw.svg?style=shield)](https://circleci.com/gh/ekarpovs/web-app-api-gtw)
[![License](https://img.shields.io/badge/license-MIT-red.svg)](./LICENSE)

API proxy for web applications are used with the [set of microservices](https://github.com/ekarpovs/road-map).
Uses REDIS for session store.

## Development

```bash
npm run debug
npm run watch-test
```

## Running the app locally

```bash
npm run build
npm run test
npm run start
```

## Running the app locally

## Docker

```bash
docker build -t wep-app-api-gtw .
docker run -p 3000:3000 wep-app-api-gtw
```

## Docker compose

## CircleCI
