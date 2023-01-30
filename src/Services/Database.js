
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

// Database Configuration -----------------------------------------------------------------------//
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

async function getConnection() {
  let db;

  try {
    await mongoClient.connect();
    db = mongoClient.db();
  } catch (error) {
    console.log("Erro no servidor");
    console.log(error);
  }

  return db;
}

async function closeConnection() {
  mongoClient.close();
}

export { getConnection, closeConnection };

