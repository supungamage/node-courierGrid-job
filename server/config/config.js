var env = process.env.NODE_ENV || 'development';
console.log('#### env', env);

//containerized env
if(env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://mongodb/courierJob';
} else if(env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/courierJob';
} else if(env === 'production') {
  process.env.MONGODB_URI = 'mongodb://root:abc123@ds123963.mlab.com:23963/courier-job';
}

// if(env === 'development') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/courierJob';
// } else if(env === 'test') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/courierJob';
// } else if(env === 'production') {
//   process.env.MONGODB_URI = 'mongodb://root:abc123@ds123963.mlab.com:23963/courier-job';
// }
