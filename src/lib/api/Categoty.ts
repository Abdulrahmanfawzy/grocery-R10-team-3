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
): Promise<MealsResponse> => {
  const response = await axiosInstance.get<MealsResponse>(
    `/api/categories/${number}/meals`,
  );
  return response.data;
};
