import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import type { Cart } from "../types/cart.types";
import type { CartItem } from "../types/checkoutpage2.types";
import api from "./checkoutApi";

// ✅ بتجيب الـ token من localStorage بدل Redux
const getToken = () => {
  try {
    const persisted = localStorage.getItem("persist:login");
    if (persisted) {
      const parsed = JSON.parse(persisted);
      return parsed.token?.replace(/"/g, "") ?? null;
    }
  } catch {
    return null;
  }
  return null;
};

export const getCartProducts = async (token: string | null): Promise<Cart> => {
  const { data } = await axios.get(
    `https://grocery.newcinderella.online/api/cart`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data.data;
};

export const addToCart = async ({
  mealId,
  quantity,
  token,
}: {
  mealId: number;
  quantity: number;
  token: string | null;
}) => {
  const { data } = await axios.post(
    "https://grocery.newcinderella.online/api/cart/items",
    { meal_id: mealId, quantity },
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return data;
};

export const updateCart = async ({
  mealId,
  quantity,
  token,
}: {
  mealId: number;
  quantity: number;
  token: string | null;
}) => {
  const { data } = await axios.put(
    `https://grocery.newcinderella.online/api/cart/items/${mealId}`,
    { quantity },
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return data;
};

export const removeCartItem = async (itemId: number, token: string | null) => {
  const { data } = await axios.delete(
    `https://grocery.newcinderella.online/api/cart/items/${itemId}`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return data;
};

export const clearCart = async (token: string | null) => {
  const { data } = await axios.delete(
    `https://grocery.newcinderella.online/api/cart/clear`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return data;
};

export const useCart = () => {
  const token = getToken();
  return useQuery({
    queryKey: ["cart", token],
    queryFn: () => getCartProducts(token),
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const token = getToken();

  return useMutation({
    mutationFn: (variables: { mealId: number; quantity: number }) =>
      addToCart({ ...variables, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast("Your Product Added To cart Successfully");
    },
  });
};

export const useUpdataQuantity = () => {
  const queryClient = useQueryClient();
  const token = getToken();

  return useMutation({
    mutationFn: (variables: { mealId: number; quantity: number }) =>
      updateCart({ ...variables, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Your Product Quantity updated Successfully");
    },
  });
};

export const useRemoveCartItem = () => {
  const token = getToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (itemId: number) => removeCartItem(itemId, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Your Product Have been Removed From Cart");
    },
  });
};

export const useClearCart = () => {
  const queryClient = useQueryClient();
  const token = getToken();

  return useMutation({
    mutationFn: () => clearCart(token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Your Cart is Cleared Now");
    },
  });
};

export async function getCart() {
  const response = await api.get("/cart");
  const data = response.data.data;

  const items: CartItem[] = data.items.map((item: any) => ({
    id: item.id,
    name: item.meal.title,
    quantity: item.quantity,
    price: item.unit_price,
    imageUrl: item.meal.image_url,
    inStock: item.meal.in_stock,
  }));

  return {
    items,
    subtotal: data.subtotal,
    tax: data.tax,
    total: data.total,
  };
}

export async function updateCartItem(id: string, quantity: number) {
  const response = await api.put(`/cart/items/${id}`, { quantity });
  return response.data;
}
