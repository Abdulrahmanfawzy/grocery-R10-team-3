import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod";

export const editAddressSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone is required"),
  street_address: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
});

export type EditAddressFormValues = z.infer<typeof editAddressSchema>;

async function editAddress(id: number, params: EditAddressFormValues) {
  const res = await axiosInstance.put(`/api/addresses/${id}`, params);
  return res.data;
}

export function useUpdateAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["update-address"],
    mutationFn: ({
      id,
      params,
    }: {
      id: number;
      params: EditAddressFormValues;
    }) => editAddress(id, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-addresses"] });
      successToast("Updated Successfully");
    },
    onError: () => errorToast("Failed to update the address"),
  });
}
