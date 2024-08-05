import mongoose from "mongoose";

const showSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  producer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producer",
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  backgroundImg: {
    type: String,
    require: true,
  },
  playlistURL: {
    type: String,
    require: true,
  },
});

export const Show = mongoose.model("Show", showSchema);
