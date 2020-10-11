FROM node:latest
RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app
COPY package.json /usr/local/app/
RUN npm install
COPY . /usr/local/app
EXPOSE 8080
CMD ["npm", "start"]
