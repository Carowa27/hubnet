import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import { errorMiddleware } from "./middleware/errorMiddleware";
import producerRoutes from "./routes/producerRoutes";
import showRoutes from "./routes/showRoutes";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// headers

app.use("/api/v1/hubnet/producers", producerRoutes);
app.use("/api/v1/hubnet/shows", showRoutes);

app.use(errorMiddleware);

const run = async () => {
  try {
    mongoose.set("strictQuery", true);

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
