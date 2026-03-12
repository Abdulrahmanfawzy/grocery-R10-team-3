import type { MealsData } from "@/components/Types/Category";
import { getCategoriesDetails } from "@/lib/api/Categoty";
import { useEffect, useState } from "react";

export const useCategoryMeals = (categoryId: number, searchTerm?: string) => {
  const [mealsData, setMealsData] = useState<MealsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategoryMeals = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getCategoriesDetails(categoryId, searchTerm);
      if (response.success) {
        setMealsData(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch category meals:", error);
      setError("Failed to load meals");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryMeals();
  }, [categoryId, searchTerm]);

  return {
    category: mealsData?.category,
    meals: mealsData || [],
    pagination: mealsData?.pagination,
    isLoading,
    error,
    refetch: fetchCategoryMeals,
  };
};
