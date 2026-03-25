import z from "zod";

export const paymentSchema = z.object({
  paymentMethod: z.string(),
  billingSameAsDelivery: z.boolean().default(true),
});
