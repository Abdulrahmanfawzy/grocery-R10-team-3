import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import z from "zod";

export const createAddressSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone is required"),
  street_address: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
});

export type CreateAddressFormValues = z.infer<typeof createAddressSchema>;

async function createAddress(params: CreateAddressFormValues) {
  const res = await axiosInstance.post("/api/addresses", params);
  return res.data;
}

export function useAddAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-address"],
    mutationFn: (data: CreateAddressFormValues) => createAddress(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-addresses"] });
      successToast("Address Added Successfully");
    },
    onError: (error: AxiosError<any>) => {
      const message = error.response?.data.message || "Failed to add address";
      errorToast(message);
    },
  });
}
