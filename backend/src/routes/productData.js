import express from "express";
import { product } from "../models/users/product.model.js";
import dotenv from "dotenv";
dotenv.config()
import {user} from "../models/users/user.model.js"
import {v2 as cloudinary} from 'cloudinary'
import multer from "multer";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken"



const router = express.Router();

const uploadDir = "uploads/products";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}


cloudinary.config({
  cloud_name : process.env.cloud_name,
  api_key : process.env.api_key,
  api_secret : process.env.api_secret
})


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

router.post("/product-data", upload.array("images",12), async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const files = req.files;
    console.log(files)
    const cloudinaryRes = await Promise.all(
      files.map(file=> cloudinary.uploader.upload(file.path))   
    )

    const imagesPath = cloudinaryRes.map(file=>file.url)
    
   console.log(imagesPath)
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

    const data = jwt.verify(token,process.env.SecretKey)
    let userData = await user.findOne({email : data.email})

    const newProduct = await product.create({
      title,
      description,
      price: parseFloat(price),
      discount: parseFloat(discount) || 0,
      image: imagesPath,
      category,
      condition,
      brand,  
      location, 
      createdByUser : userData._id
    });
    
    userData = await user.findByIdAndUpdate(userData._id,
      {$push : {products : newProduct._id}}
    )

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
