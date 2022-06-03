FROM node:14-alpine

WORKDIR /usr/node-redis

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

COPY ./index.ts ./

CMD ["npm", "start"]