FROM node:latest

WORKDIR /app/react-app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

