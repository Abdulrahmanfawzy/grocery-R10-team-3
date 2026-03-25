import axiosInstance from './axios-instance';
import type { AxiosRequestConfig } from 'axios';
import type { 
  CartResponse, 
  AddToCartRequest, 
  UpdateCartItemRequest,
  CartItem
} from '../types/cart.types';

export const cartApi = {
  /**
   * Get cart information
   */
  getCart: async (config?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<CartResponse>('/api/cart', config);
    return response.data;
  },

  /**
   * Add an item to the cart
   */
  addItem: async (item: AddToCartRequest, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.post<CartItem>('/api/cart/items', item, config);
    return response.data;
  },

  /**
   * Update an item's quantity in the cart
   */
  updateItem: async (id: number, update: UpdateCartItemRequest, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.put<CartItem>(`/api/cart/items/${id}`, update, config);
    return response.data;
  },

  /**
   * Delete an item from the cart
   */
  deleteItem: async (id: number, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.delete(`/api/cart/items/${id}`, config);
    return response.data;
  },

  /**
   * Clear all items in the cart
   */
  clearCart: async (config?: AxiosRequestConfig) => {
    const response = await axiosInstance.delete('/api/cart/clear', config);
    return response.data;
  }
};

export default cartApi;
