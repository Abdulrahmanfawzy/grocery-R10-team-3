import { AxiosError } from "axios";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { errorToast, successToast } from "@/components/Toast/Toaster";

async function toggleFavorite(id: number) {
  const res = await axiosInstance.post(`/api/favorites/${id}/toggle`);
  return res.data;
}

export function useToggleToFavorite() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-to-favorite"],
    mutationFn: (id: number) => toggleFavorite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-favorites"] });
      queryClient.invalidateQueries({ queryKey: ["show-list"] });
      successToast("Item Toggled Successfully");
    },
    onError: (error: AxiosError<any>) => {
      const message =
        error.response?.data.message || "Failed to toggle favorites";
      errorToast(message);
    },
  });
}
