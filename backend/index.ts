import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import { errorMiddleware } from "./middleware/errorMiddleware";
import producerRoutes from "./routes/producerRoutes";
import showRoutes from "./routes/showRoutes";
import helmet from "helmet";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

//update url when launching into production
const corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200,
};

const port = process.env.PORT || 5000;
const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(mongoSanitize());

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
