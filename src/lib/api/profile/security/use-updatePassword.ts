import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import z from "zod";

export const PasswordSchema = z
  .object({
    current_password: z.string().min(1, "Current password is required"),

    password: z
      .string()
      .min(8, "New password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),

    password_confirmation: z
      .string()
      .min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export type PasswordFormValues = z.infer<typeof PasswordSchema>;

async function updatePassword(params: PasswordFormValues) {
  const res = await axiosInstance.post("/api/auth/change-password", params);
  return res.data;
}

export function useUpdatePassword() {
  return useMutation({
    mutationKey: ["update-password"],
    mutationFn: (data: PasswordFormValues) => updatePassword(data),
    onSuccess: () => successToast("Password Updated Successfully"),
    onError: (error: AxiosError<{ message: string }>) => {
      const message =
        error.response?.data?.message ?? "Failed to update password";
      errorToast(message);
    },
  });
}
