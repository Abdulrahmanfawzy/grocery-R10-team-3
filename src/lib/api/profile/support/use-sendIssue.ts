import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import z from "zod";

export const supportSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

export type SupportFormValues = z.infer<typeof supportSchema>;

async function sendIssue(params: SupportFormValues) {
  const res = await axiosInstance.post("/api/contact", params);
  return res.data;
}

export function useSendIssue() {
  return useMutation({
    mutationKey: ["send-issue"],
    mutationFn: (data: SupportFormValues) => sendIssue(data),
    onSuccess: () => successToast("Issue was sent successfully"),
    onError: () => errorToast("Failed to send you issue"),
  });
}
