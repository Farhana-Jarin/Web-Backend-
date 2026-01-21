import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    amount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      min: 0,
    },
    method: {
      type: String,
      enum: [
        "credit_card",
        "bkash",
        "nagad",
        "bank_transfer",
        "cash_on_delivery",
      ],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending",
    },
    transactionId: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  { timestamps: true },
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
