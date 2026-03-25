import { useQuery } from "@tanstack/react-query";
import { homeApi } from "../lib/api/home.api";

export const useProductDetails = (id: string | number) => {
  return useQuery({
    queryKey: ["product-details", id],
    queryFn: () => homeApi.getproductDetails(id),
    enabled: !!id,
  });
};
