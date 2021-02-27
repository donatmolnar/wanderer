FROM node:15.8.0-alpine3.10

ENV PORT=$PORT

WORKDIR /usr/app

COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE $PORT
EXPOSE 8080

CMD [ "npm", "start" ]