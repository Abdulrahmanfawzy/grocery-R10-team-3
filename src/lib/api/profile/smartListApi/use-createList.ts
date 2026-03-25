import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import z from "zod";

export const createSmartListSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(10),
  image: z.instanceof(File),
  meal_ids: z.array(z.number()).min(1, "At least one meal is required"),
});

export type CreateSmartListFormValues = z.infer<typeof createSmartListSchema>;

async function createSmartList(params: CreateSmartListFormValues) {
  const formData = new FormData();
  formData.append("name", params.name);
  formData.append("description", params.description);
  if (params.image) {
    formData.append("image", params.image);
  }
  params.meal_ids.forEach((id) => formData.append("meal_ids[]", String(id)));

  const res = await axiosInstance.post("/api/smart-lists", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
}

export function useCreateSmartList() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-smart-list"],
    mutationFn: (data: CreateSmartListFormValues) => createSmartList(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-smart-list"] });
      successToast("List Created Successfully");
    },
    onError: (error: AxiosError<any>) => {
      const message =
        error.response?.data.message || "Failed to create your list";
      errorToast(message);
    },
  });
}
