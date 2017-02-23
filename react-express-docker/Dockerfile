FROM node:7.6-alpine

RUN npm install webpack -g

WORKDIR /usr/src/app/
COPY . /usr/src/app/

RUN npm install
RUN npm run build


ENV PORT=8080
CMD ["npm", "run", "serve"]
EXPOSE 8080

