import axiosInstance from "@/lib/Axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

async function getOrders() {
  const res = await axiosInstance.get("/api/orders");
  return res.data;
}

export function useGetOrders() {
  return useQuery({
    queryKey: ["get-orders"],
    queryFn: getOrders,
  });
}
