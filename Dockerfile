FROM node:16-buster AS builder

ARG NPM_TOKEN
WORKDIR /app

COPY . .
RUN npm i -g solidity-docgen@v0.5.16
RUN npm config -g set '//npm.pkg.github.com/:_authToken' ${NPM_TOKEN}
RUN yarn --frozen-lockfile
RUN yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
