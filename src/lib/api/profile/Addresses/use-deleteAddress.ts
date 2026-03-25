import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function deleteAddress(params: number) {
  const res = await axiosInstance.delete(`/api/addresses/${params}`);
  return res.data;
}

export function useDeleteAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-address"],
    mutationFn: (id: number) => deleteAddress(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-addresses"] });
      successToast("Deleted Successfully");
    },
    onError: () => errorToast("Failed to delete address"),
  });
}
