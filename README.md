# Dockerized node-courierGrid-job

## courierGrid-job is a microservice written in nodeJS and mongodb
## Both node courierGrid-job and mongodb run on dockerized environments.

### pull the image
docker pull supungamage/courier_job_node

### run node container : 
docker run supungamage/courier_job_node

### run mongodb container: 
docker run -d --name my-mongo-container mongo

### Start node and link my-mongo-container: 
docker run -d -p 3000:3000 --link my-mongo-container:mongodb supungamage/courier_job_node

### service runs on (all CURD operations)
http://localhost:8080/job
