import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .min(1, "First name is required"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .min(1, "Last name is required"),
  phone: z
    .string()
    .regex(/^(\+20|0)?1[0-2][0-9]{8}$/, "Invalid Egyptian phone number")
    .min(1, "Phone number is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  createAccount: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
