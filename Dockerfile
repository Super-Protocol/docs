FROM node:22-bookworm-slim AS builder

WORKDIR /app

COPY . .
RUN npm i -g solidity-docgen@v0.5.16
RUN npm ci
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
