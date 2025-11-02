import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mosgoose is connected");
  })
  .catch((error) => {
    console.log("Something went wrong", error);
  });

app.listen(8000, () => {
  console.log("Running in http://localhost:8000");
});

