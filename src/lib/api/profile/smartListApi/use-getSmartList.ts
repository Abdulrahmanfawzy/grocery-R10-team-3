import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

async function getSmartList() {
  const response = await axiosInstance.get("/api/smart-lists");
  return response.data;
}

export function useGetSmartList() {
  return useQuery({
    queryKey: ["get-smart-list"],
    queryFn: getSmartList,
    retry: 2,
    retryDelay: 2000,
  });
}

async function showSmartList(listId: number) {
  const res = await axiosInstance.put(`/api/smart-lists/${listId}`);
  return res.data;
}

export function useShowSmartList() {
  return useMutation({
    mutationKey: ["show-smart-list"],
    mutationFn: (id: number) => showSmartList(id),
    onError: () => errorToast("Failed to fetch smart list"),
  });
}
