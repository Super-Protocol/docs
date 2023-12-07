FROM node:18-buster AS builder

ARG NPM_TOKEN
WORKDIR /app

RUN apt-get install g++ make python3
RUN wget https://dl.google.com/go/go1.13.linux-amd64.tar.gz && tar -C /usr/local -xzf go1.13.linux-amd64.tar.gz
ENV PATH $PATH:/usr/local/go/bin

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
