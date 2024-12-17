FROM node:18
WORKDIR /server
COPY package.json package-lock.json ./
RUN npm install 
COPY . .
EXPOSE 5000 
CMD ["npm", "start"]
