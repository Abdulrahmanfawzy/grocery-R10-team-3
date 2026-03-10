import z from "zod";

export const paymentSchema = z.object({
  paymentMethod: z.string(),
  promoCode: z.string().optional(),
  billingSameAsDelivery: z.boolean().default(true),
});
