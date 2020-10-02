import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
const app = express();

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const { PORT, NODE_ENV } = process.env || 8080;
app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);
