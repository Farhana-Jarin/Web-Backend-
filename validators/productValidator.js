import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  price: z.number().positive(),
  category: z.string().optional(),
  stock: z.number().int().min(0),
  image: z.string().url().optional(),
});
