import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();

const mongoUri = process.env.MONGO_URI || "mongodb+srv://aneeshkulkarni007:583683@cluster0.sut6y.mongodb.net/alerting-system"

mongoose.connect(mongoUri, {
    tls: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
const PORT = process.env.PORT || 3000;