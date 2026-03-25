import axiosInstance from "@/lib/Axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

async function getFavorites() {
  const res = await axiosInstance.get("/api/favorites");
  return res.data;
}

export function useGetFavorites() {
  return useQuery({
    queryKey: ["get-favorites"],
    queryFn: getFavorites,
  });
}
