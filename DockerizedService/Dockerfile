
#referenced https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker
#referenced https://www.youtube.com/watch?v=DQdB7wFEygo&t=48s
# FROM node:10-alpine
FROM node:22

#Go to the work directory where our node js file is 
WORKDIR /HelloWorld


#Copy package.json and package.lock
COPY package*.json ./
COPY package-lock*.json ./

# USER node

#Install App Dependencies
#run happens when the image is building
RUN npm install

#Copy the rest of our code into the image
COPY . .

#Set port environment variables
ENV PORT=9000

#Expose the port so that our computer can use it
EXPOSE 9000

#Run the app!
#Docker uses CMD to start the container after building, can only have 1 CMD command per dockerfile
CMD [ "npm", "start" ]
# CMD [ "node", "server.js" ]