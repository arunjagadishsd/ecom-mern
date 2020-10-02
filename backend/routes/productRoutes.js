import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler((req, res) => {
    const product = Product.findById(req.params.id);
    if (product) {
      res.json(product);
    }
    res.status(404);
    throw new Error(`Not Found - ${req.originalUrl}`);
  })
);

export default router;
