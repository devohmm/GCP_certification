
FROM node:22-slim

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm ci --only=production

COPY . ./

ENTRYPOINT [ "node", "index.js" ]
