# Build : docker build -f node.dockerfile -t supungamage/courier_job_node .

# Start mongodb: docker run -d --name my-mongo-container mongo

# Start node and link my-mongo-container: 
# docker run -d -p 3000:3000 --link my-mongo-container:mongodb supungamage/courier_job_node

FROM node:latest

MAINTAINER Supun Gamage

ENV NODE_ENV=development
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]



