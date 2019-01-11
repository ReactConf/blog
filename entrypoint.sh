#!/usr/bin/env sh
bash

chown node:node -R .


npm install
gatsby develop
npm run build
