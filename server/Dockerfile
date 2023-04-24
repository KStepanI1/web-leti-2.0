FROM node:18.12.1-alpine AS builder

RUN mkdir /app
WORKDIR /app

COPY ./package.json .

RUN npm install
COPY . ./

RUN npm run build

COPY . ./

EXPOSE 5000

CMD ["npm", "run", "start"]