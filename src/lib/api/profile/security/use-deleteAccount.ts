import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),

  email: z.string().min(1, "Email is required").email("Invalid email address"),

  subject: z.string().min(5, "Subject is required"),

  message: z.string().min(1, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

async function deleteAccount(params: ContactFormValues) {
  const res = await axiosInstance.delete("/api/auth/delete-account", {
    data: params,
  });
  return res.data;
}

export function useDeleteAccount() {
  return useMutation({
    mutationKey: ["delete-account"],
    mutationFn: (data: ContactFormValues) => deleteAccount(data),
    onSuccess: () => {
      successToast("Account deleted successfully");
      localStorage.removeItem("token");
    },
    onError: () => errorToast("Failed to delete your account"),
  });
}
