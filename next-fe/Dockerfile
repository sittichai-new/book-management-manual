FROM node:24 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm install
COPY . .
RUN npm run build

FROM node:24
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY next.config.js .

EXPOSE 3000
CMD ["npm", "start"]
