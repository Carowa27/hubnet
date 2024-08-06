import mongoose from "mongoose";

const socialmediaSchema = new mongoose.Schema(
  {
    media: String,
    URL: String,
  },
  { _id: false }
);

const producerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  socialmedia: {
    type: socialmediaSchema,
    require: false,
  },
  cutout: {
    type: String,
    require: true,
  },
  logo: {
    type: String,
    require: true,
  },
});

export const Producer = mongoose.model("Producer", producerSchema);
