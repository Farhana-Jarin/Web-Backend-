import express from "express";
import {
  createPayment,
  getPaymentDetails,
  updatePaymentStatus,
  deletePayment,
} from "../controllers/paymentController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/authorizeMiddleware.js";

const router = express.Router();

router.post("/", authenticate, authorizeRoles("admin", "user"), createPayment);
router.get(
  "/:orderId",
  authenticate,
  authorizeRoles("admin", "user"),
  getPaymentDetails,
);
router.put(
  "/:orderId",
  authenticate,
  authorizeRoles("admin"),
  updatePaymentStatus,
);
router.delete(
  "/:orderId",
  authenticate,
  authorizeRoles("admin"),
  deletePayment,
);

export default router;
