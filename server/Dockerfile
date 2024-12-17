FROM node:20 AS build
WORKDIR /server
COPY package.json package-lock.json ./
RUN npm install 
COPY . .
EXPOSE 5000 
CMD ["npm", "start"]
