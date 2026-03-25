import axiosInstance from "@/lib/axiosInstance";

export interface SavedCard {
  id: string;
  brand?: string;
  last4?: string;
  exp_month?: number;
  exp_year?: number;
  [key: string]: unknown;
}

export const getSavedCards = async (): Promise<SavedCard[]> => {
  const response = await axiosInstance.get<{ data: SavedCard[] }>("/api/cards");
  return response.data.data ?? response.data ?? [];
};
