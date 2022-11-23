FROM node:18.12.1-alpine

COPY . ./app

WORKDIR /app

RUN npm install

RUN npm install pm2 -g

RUN pm2 install typescript

EXPOSE 3900

CMD ["pm2-runtime", "pm2.json"]
