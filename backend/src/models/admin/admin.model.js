import mongoose from "mongoose";

const adminschema = new mongoose.Schema({
  name: {
    typeof: "string",
    require: true,
  },
  password: {
    typeof: "string",
    require: true,
  },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
});


export default adminschema;
