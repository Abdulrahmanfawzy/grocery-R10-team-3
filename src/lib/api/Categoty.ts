import axiosInstance from "../Axios/axiosInstance";
import type {
  CategoriesResponse,
  MealsResponse,
} from "@/components/Types/Category";

export const getCategories = async (): Promise<CategoriesResponse> => {
  const response =
    await axiosInstance.get<CategoriesResponse>("/api/categories");
  return response.data;
};

export const getCategoriesDetails = async (
  categoryId: number,
  searchTerm?: string,
  stock?: string,
  brand?: string,
  min_price?: string,
  max_price?: string,
): Promise<MealsResponse> => {
  const params: Record<string, string | number> = {};

  if (min_price) params.min_price = min_price;
  if (max_price) params.max_price = max_price;
  if (categoryId) params.category_id = categoryId;
  if (searchTerm) params.search = searchTerm;
  if (stock) params.in_stock = stock;
  if (brand) params.brand = brand;

  const { data } = await axiosInstance.get<MealsResponse>("/api/meals", {
    params,
  });

  return data;
};
