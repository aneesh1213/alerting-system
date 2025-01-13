import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();

const mongoUri = process.env.MONGO_URI.toString();

mongoose.connect(mongoUri, {
    tls: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
const PORT = process.env.PORT || 3000;