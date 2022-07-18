#!/bin/bash

docker run --env-file=.env -e "CONFIG=$(cat docsearch.config.json | jq -r tostring)" algolia/docsearch-scraper
