import axiosInstance from './axios-instance';
import type { AxiosRequestConfig } from 'axios';

export interface PromoCode {
  id: number;
  code: string;
  discount: number;
  discount_type: string;
  min_order?: number;
  max_discount?: number;
  start_date?: string;
  end_date?: string;
  is_active?: boolean;
  [key: string]: unknown;
}

export interface OffersResponse {
  offers?: PromoCode[];
  data?: PromoCode[];
  [key: string]: unknown;
}

export const offersApi = {

  getOffers: async (config?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<OffersResponse>('/api/offers', config);
    return response.data;
  },
};

export default offersApi;
