import axiosInstance from "@/lib/Axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

async function getSavedCard() {
  const res = await axiosInstance.get("/api/cards");
  return res.data;
}

export function useGetSavedCard() {
  return useQuery({
    queryKey: ["get-saved-card"],
    queryFn: getSavedCard,
  });
}
