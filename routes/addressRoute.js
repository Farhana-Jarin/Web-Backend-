import express from "express";
import {
  createAddress,
  getAddresses,
  getMyAddresses,
  updateAddress,
  deleteAddress,
} from "../controllers/addressController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/authorizeMiddleware.js";

const router = express.Router();

router.post("/", authenticate, authorizeRoles("admin", "user"), createAddress);

router.get("/", authenticate, authorizeRoles("admin", "user"), getAddresses);
router.get("/my", authenticate, authorizeRoles("user"), getMyAddresses);
router.put(
  "/:id",
  authenticate,
  authorizeRoles("admin", "user"),
  updateAddress,
);

router.delete(
  "/:id",
  authenticate,
  authorizeRoles("admin", "user"),
  deleteAddress,
);

export default router;
