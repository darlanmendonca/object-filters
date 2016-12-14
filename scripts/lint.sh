#!/bin/bash

set -e

./node_modules/eslint/bin/eslint.js **/*.js \
--ignore-pattern 'node_modules/*'