FROM node
WORKDIR /myapp
COPY package.json /myapp
RUN npm install
COPY . /myapp
CMD node server.js
EXPOSE 8000