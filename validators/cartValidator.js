import { z } from "zod";

export const cartSchema = z.object({
  items: z.array(
    z.object({
      product: z.string().length(24),
      quantity: z.number().int().min(1)
    })
  ).min(1)
});