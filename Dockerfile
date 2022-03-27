FROM node:17-buster AS builder

WORKDIR /app
COPY . .
RUN npm ci
RUN npx docusaurus build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
