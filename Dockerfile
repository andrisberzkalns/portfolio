FROM node:20.11.1-alpine

WORKDIR /opt/app

ENV NODE_ENV production

COPY package*.json ./

RUN npm ci 

COPY . /opt/app

RUN npm install --dev && npm run build

CMD [ "npm", "start" ]