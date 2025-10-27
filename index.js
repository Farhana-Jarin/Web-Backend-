import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Backend is working");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongoose is connected");
  })
  .catch((errro) => {
    console.log(errro);
  });

app.listen(3000, () => {
  console.log("Runnning in http://localhost:3000");
});

njhjvhjbkj