// mongodb+srv://yashkale:<password>@cluster0.7vfbdqv.mongodb.net/?retryWrites=true&w=majority

import mongoose from 'mongoose'
import config from '../config.json';
const MONGODB_URI = config.mongoConnectionString;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .process.env.local'
  )
}
let cached = global.mongooseConnection

if (!cached) {
  cached = global.mongooseConnection = null;
}

async function dbConnect () {
  if (cached) {
    return cached
  }

    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    }

    cached = mongoose.connect(MONGODB_URI, opts)
  
  return await cached.then(result => {
      console.log(result.models);
    return result;
  })
}

export default dbConnect