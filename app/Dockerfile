FROM node:20-alpine

WORKDIR /src
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3002

CMD [ "npm", "start" ]