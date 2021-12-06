FROM node:16

WORKDIR /usr/src/facebook-clone-app

RUN apt-get update

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD yarn start