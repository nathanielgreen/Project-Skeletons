FROM node:7.6-alpine

RUN npm install webpack -g
RUN npm install serve -g

WORKDIR /usr/src/app/
COPY package.json /usr/src/app/
COPY . /usr/src/app/

RUN npm install

RUN npm run build

ENV PORT=8080
CMD ["npm", "run", "serve"]
EXPOSE 8080

