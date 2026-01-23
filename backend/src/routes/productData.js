import express from "express";
import { product } from "../models/users/product.model.js";
import multer from "multer";
import path from "path";

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/products");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase(),
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

router.post("/product-data", upload.array("images", 8), async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      discount,
      category,
      condition,
      brand,
      location,
    } = req.body;
    const imagesPath = req.files ? req.files.map((file) => file.path) : [];

    const newProduct = await product.create({
      title,
      description,
      price: parseFloat(price),
      discount: parseFloat(discount) || 0,
      images: imagesPath,
      category,
      condition,
      brand,
      location,
    });

    res.status(201).json({
      message: "Product Created Successfully",
      product: newProduct,
    });
  } catch (err) {
    console.log(`Error Occured: ${err}`);
    res.status(500).json({
      message: "Error occured in creating product",
      error: err.message,
    });
  }
});

export default router;
