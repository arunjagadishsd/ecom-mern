import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const { PORT, NODE_ENV } = process.env || 8080;
app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);
