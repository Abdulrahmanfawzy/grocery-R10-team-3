import { z } from "zod";

export const deliverySchema = z.object({
  fulfilmentMethod: z.enum(["delivery", "pickup"], {
    message: "Please select a fulfilment method",
  }),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  provenance: z.string().min(1, "Provenance is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  scheduleDelivery: z.enum(["now", "later"]).optional(),
  deliverySpeed: z.enum(["standard", "priority"]).optional(),
});

export type DeliveryFormData = z.infer<typeof deliverySchema>;
