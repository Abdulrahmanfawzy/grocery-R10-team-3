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
): Promise<MealsResponse> => {
  const params: Record<string, string | number> = {};

  if (categoryId) params.category_id = categoryId;
  if (searchTerm) params.search = searchTerm;
  if (stock) params.in_stock = stock;
  if (brand) params.brand = brand;

  const { data } = await axiosInstance.get<MealsResponse>("/api/meals", {
    params,
  });

  return data;
};
