import axiosInstance from "./axios-instance";
import type { AxiosRequestConfig } from "axios";
import type {
  BestSellsResponse,
  HotDealsResponse,
  NewProductsResponse,
  ProductResponse,
} from "../types/home.types";

export const homeApi = {
  /**
   * Get Daily Best Sells
   */
  getBestSells: async (config?: AxiosRequestConfig) => {
    // Both endpoints were mentioned for best sells, but assuming /api/best-sells is the correct one.
    const response = await axiosInstance.get<BestSellsResponse>(
      "/api/best-sells",
      config,
    );
    return response.data;
  },

  getproductDetails: async (id: number) => {
    // Both endpoints were mentioned for best sells, but assuming /api/best-sells is the correct one.
    const response = await axiosInstance.get<ProductResponse>(
      `/api/meals/${id}`,
    );
    return response.data;
  },

  /**
   * Get Hot Deals
   * Note: /api/meals/hot returns empty from the backend, so we use /api/best-sells as the data source.
   */
  getHotDeals: async (config?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<HotDealsResponse>(
      "/api/best-sells",
      config,
    );
    return response.data;
  },

  /**
   * Get New Products
   */
  getNewProducts: async (config?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<NewProductsResponse>(
      "/api/new-products",
      config,
    );
    return response.data;
  },

  /**
   * Get More to Explore items
   */
  getMoreToExplore: async (config?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<any>(
      "/api/more-to-explore",
      config,
    );
    return response.data;
  },
};

export default homeApi;
