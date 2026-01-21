import express from "express";
import {
  addReview,
  getProductReviews,
  deleteReview,
} from "../controllers/reviewController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/authorizeMiddleware.js";

const router = express.Router();

router.post("/", authenticate, authorizeRoles("user"), addReview);
router.get(
  "/product/:productId",
  authenticate,
  authorizeRoles("admin", "user"),
  getProductReviews,
);
router.delete("/:id", authenticate, authorizeRoles("user"), deleteReview);

export default router;
