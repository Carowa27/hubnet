import mongoose from "mongoose";

const showSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  producer: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producer",
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    logo: {
      type: String,
      require: true,
    },
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
