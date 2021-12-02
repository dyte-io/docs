# Dyte Docs

## Writing Documentation

If you want to write documentation for a newer version of any section, start by editing/adding files in the `/docs/<section>` folder.

After you're done with the changes, run the following command so that docusaurus properly manages the new version:

```sh
npm run docusaurus docs:version:<section> 1.2.3
```

> NOTE: If you want to modify documentation in an older version, just edit files in the respective versioned docs folder.

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
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Scraping for Algolia Docsearch

Place your environment variables in `.env` and run this command from the root of this repository.

Dependencies:

- docker
- jq

```sh
docker run -it --env-file=.env -e "CONFIG=$(cat docsearch_config.json | jq -r tostring)" algolia/docsearch-scraper
```
