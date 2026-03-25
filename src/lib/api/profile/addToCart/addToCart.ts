import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export interface Item {
  meal_id: number;
  quantity: number;
}

async function addToCart(params: Item) {
  const formData = new FormData();
  formData.append("meal_id", params.meal_id.toString());
  formData.append("quantity", params.quantity.toString());
  const res = await axiosInstance.post(`/api/cart/items`, formData);
  return res.data;
}

export function useAddToCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-to-cart"],
    mutationFn: (data: Item) => addToCart(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
      successToast("Item is added to cart");
    },
    onError: (error: AxiosError<any>) => {
      const message = error.response?.data?.message || "Failed to add item";
      errorToast(message);
    },
  });
}
