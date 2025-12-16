import mongoose, { mongo } from "mongoose";
import { maxLength, minLength, required, trim } from "zod/mini";
import bcrypt from "bcrypt";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      unique: true,
      maxLength: 255,
    },
    content: {
      type: String,
      required: true,
      minLength: 10,
    },
    auhtor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

blogSchema.pre("save", async function () {
  if (!this.isModified("title")) return;

  const salt = await bcrypt.genSalt(10);
  this.title = await bcrypt.hash(this.title, salt);
});

blogSchema.methods.compareTitle = async function (givenTitle) {
  return await bcrypt.compare(givenTitle, this.title);
};

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
