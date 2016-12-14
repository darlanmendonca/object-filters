#!/bin/bash

set -e

./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha -- \
--compilers js:babel-register \
--bail \
sources/*.spec.js

if [ ! -z "$EXPORT_COVERAGE" ]; then
  cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

  rm -rf ./coverage
fi

