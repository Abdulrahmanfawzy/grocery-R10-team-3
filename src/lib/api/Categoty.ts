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
  number: number,
  searchTerm?: string,
): Promise<MealsResponse> => {
  const response = await axiosInstance.get<MealsResponse>(
    `/api/meals?search=${searchTerm ? searchTerm : ""}&category_id=${number}`,
  );

  return response.data;
};
