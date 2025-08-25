#import the base operation system image
FROM node:18-alpine

#setup the working directory
WORKDIR /

#copy the package.json and the project dependencies
COPY package.json ./

#install the project dependencies
RUN npm install

#copy all the app files
COPY . .

#exposing the port that the app runs on
EXPOSE 3000

#command to run the node runtime environment
CMD ["node", "app.js"]