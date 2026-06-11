import { MongoClient } from "mongodb";
import AppError from "../utils/AppError.js";

let client, db;

/* ----------------------- Connect MongoDB database ---------------------- */
const connectDB = async () => {
  if (db) return db;

  const URI = process.env.MONGO_URI;

  if (!URI) throw new AppError("Database URI is not initialize!");

  client = new MongoClient(URI);
  await client.connect();
  client.db();

  return db;
};

/* ----------------------- Disconnect MongoDB database ---------------------- */
const disconnectDB = async () => {
  if (client) {
    await client.close();
    client = undefined;
    db = undefined;
  }
};

export { client, connectDB, db, disconnectDB };
