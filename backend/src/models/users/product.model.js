import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 100,
    },
    image: {
      type: [String],
    },
    condition: {
        type: String,
        required: true,
    },
    category: {
      type: String,
      enum: [
        "Electronics",
        "Fashion",
        "Home & Gardern",
        "Vechicle",
        "Sports",
        "Books",
        "Toys & Games",
        "Others",
      ],
    },
    location: {
        type: String,
        required: true
    },
    createdByUser : {
      type : String,
    }
  },
  {
    timestamps: true,
  },
);

export const product = mongoose.model("product", productSchema);