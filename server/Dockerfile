FROM node:latest

WORKDIR /app

COPY prisma ./prisma/
COPY package.json .

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]