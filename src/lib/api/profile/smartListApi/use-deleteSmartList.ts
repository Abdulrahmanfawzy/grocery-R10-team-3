import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function deleteList(id: number) {
  const res = await axiosInstance.delete(`/api/smart-lists/${id}`);
  return res.data;
}

export function useDeleteList() {
    const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["delete-list"],
    mutationFn: (id: number) => deleteList(id),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["get-smart-list"]})
        successToast("Deleted successfully")
    },
    onError: () => errorToast("Failed to delete List")
  });
}
