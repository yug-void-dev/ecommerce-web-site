import { Router } from "express";
import { product } from "../models/users/product.model.js";
const router = Router();

router.get("/api/products", (req, res) => {
  product
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch(err => res.status(500).send([]))
});

export const getProducts = router;
