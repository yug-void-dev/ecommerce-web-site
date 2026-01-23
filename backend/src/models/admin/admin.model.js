import mongoose, { mongo } from "mongoose";

const adminschema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export const admin = mongoose.model("admin",adminschema);
