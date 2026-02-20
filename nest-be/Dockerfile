FROM node:24
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 4000

CMD ["sh", "-c", "npm start"]
