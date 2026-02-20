FROM node:24 AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:24
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node","server.js"]
