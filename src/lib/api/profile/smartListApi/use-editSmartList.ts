import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import z from "zod";

export const smartListSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  meal_ids: z.array(z.number()).min(1, "At least one meal is required"),
});

export type SmartListFormValues = z.infer<typeof smartListSchema>;

async function editList(id: number, params: SmartListFormValues) {
  const formData = new FormData();
  formData.append("name", params.name);
  formData.append("description", params.description);
  params.meal_ids.forEach((id) => formData.append("meal_ids[]", String(id)));
  const res = await axiosInstance.put(`/api/smart-lists/${id}`, formData);
  return res;
}

export function useEditList() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }: { id: number } & SmartListFormValues) =>
      editList(id, data),
    mutationKey: ["edit-list"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-smart-list"] });
      successToast("List Updated Successfully");
    },
    onError: (error: AxiosError<any>) => {
      const message = error.response?.data.message || "Failed To Update List";
      errorToast(message);
    },
  });
}
