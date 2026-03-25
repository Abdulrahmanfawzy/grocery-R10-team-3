import type { Product, CategoryDetails } from "@/lib/types/home.types";

/** Shape of the paginated meals response from the API */
export interface Pagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

/** The `data` object returned inside a meals response */
export type MealsData = Product[] & {
  category?: CategoryDetails;
  pagination?: Pagination;
};

/** Full API response wrapper for meals */
export interface MealsResponse {
  success: boolean;
  message: string;
  data: MealsData;
}

/** Full API response wrapper for categories listing */
export interface CategoriesResponse {
  success: boolean;
  message: string;
  data: CategoryDetails[];
}

