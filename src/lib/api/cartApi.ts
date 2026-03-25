import axiosInstance from "@/lib/axiosInstance";
import type { CartProduct } from "../types/cartStore";

export type { CartProduct };

export const cartQueryKey = ["cart"] as const;

interface CartApiResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    status: string;
    items: Array<{
      id: number;
      meal: {
        id: number;
        title: string;
        slug: string;
        image_url: string;
        price: number;
        discount_price: number | null;
        final_price: number;
        rating: number;
        size: string;
        brand: string;
        stock_quantity: number;
        is_available: boolean;
        in_stock: boolean;
        category: {
          id: number;
          name: string;
        };
        subcategory: {
          id: number;
          name: string;
        } | null;
      };
      quantity: number;
      unit_price: number;
      discount_amount: number;
      subtotal: number;
    }>;
    item_count: number;
    subtotal: number;
    tax: number;
    discount: number;
    total: number;
    is_empty: boolean;
    created_at: string;
    updated_at: string;
  };
}

const transformCartItem = (
  item: CartApiResponse["data"]["items"][0],
): CartProduct => ({
  id: item.id,
  name: item.meal.title,
  price: item.unit_price || item.meal.final_price || item.meal.price,
  quantity: item.quantity,
  image: item.meal.image_url,
  outOfStock: !item.meal.in_stock,
});

export const getCart = async (): Promise<CartProduct[]> => {
  try {
    const response = await axiosInstance.get<CartApiResponse>("/api/cart");

    if (response.data?.data?.items && Array.isArray(response.data.data.items)) {
      return response.data.data.items.map(transformCartItem);
    }

    if (response.data?.data) {
      const data = response.data.data;
      if (Array.isArray(data)) {
        return data.map(transformCartItem);
      }
      if (data.items && Array.isArray(data.items)) {
        return data.items.map(transformCartItem);
      }
    }

    console.warn("Cart API returned unexpected structure:", response.data);
    return [];
  } catch (error) {
    console.error("Error fetching cart:", error);
    return [];
  }
};

export interface AddToCartPayload {
  product_id: number;
  quantity: number;
}

export const addToCart = async (
  payload: AddToCartPayload,
): Promise<{ data: CartProduct[] }> => {
  try {
    const response = await axiosInstance.post<CartApiResponse>(
      "/api/cart/add",
      payload,
    );
    if (response.data?.data?.items) {
      return {
        data: response.data.data.items.map(transformCartItem),
      };
    }
    return { data: [] };
  } catch (error) {
    console.error("Error adding to cart:", error);
    return { data: [] };
  }
};

export const updateCartItem = async (
  itemId: number,
  quantity: number,
): Promise<{ data: CartProduct[] }> => {
  try {
    const response = await axiosInstance.put<CartApiResponse>(
      `/api/cart/${itemId}`,
      { quantity },
    );
    if (response.data?.data?.items) {
      return {
        data: response.data.data.items.map(transformCartItem),
      };
    }
    return { data: [] };
  } catch (error) {
    console.error("Error updating cart:", error);
    return { data: [] };
  }
};

export const removeFromCart = async (
  itemId: number,
): Promise<{ data: CartProduct[] }> => {
  try {
    const response = await axiosInstance.delete<CartApiResponse>(
      `/api/cart/${itemId}`,
    );
    if (response.data?.data?.items) {
      return {
        data: response.data.data.items.map(transformCartItem),
      };
    }
    return { data: [] };
  } catch (error) {
    console.error("Error removing from cart:", error);
    return { data: [] };
  }
};
