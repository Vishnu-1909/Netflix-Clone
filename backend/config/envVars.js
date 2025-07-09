// envVars.js
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Export all the environment variables
export const ENV_VARS = {
  MONGO_URI: process.env.MONGODB_URI || process.env.MONGO_URI, // Handle either of the variable names
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  TMDB_API_KEY: process.env.TMDB_API_KEY,
  MONGO_URI: 'mongodb://admin:9thi2000@cluster0-shard-00-00.n8cgm.mongodb.net:27017,cluster0-shard-00-01.n8cgm.mongodb.net:27017,cluster0-shard-00-02.n8cgm.mongodb.net:27017/?replicaSet=atlas-nwcrey-shard-0&ssl=true&authSource=admin',
};
