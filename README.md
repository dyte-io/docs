# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Scraping

Place your environment variables in `.env` and run this command from the root of this repository.

Dependencies:

- docker
- jq

```sh
docker run -it --env-file=.env -e "CONFIG=$(cat docsearch_config.json | jq -r tostring)" algolia/docsearch-scraper
```
