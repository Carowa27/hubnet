import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import { errorMiddleware } from "./middleware/errorMiddleware";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// headers

// routes

app.use(errorMiddleware);

const run = async () => {
  try {
    mongoose.set("strictQuery", false);

    if (process.env.MONGODB) {
      const conn = await mongoose.connect(process.env.MONGODB);
      console.log(`MongoDB connected: ${conn.connection.host}`);
    } else {
      throw new Error("MongoDB connection string missing");
    }

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

run();
