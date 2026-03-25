import axiosInstance from "@/lib/Axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

async function getPaymentsHistory() {
  const response = await axiosInstance.get("/api/payments/history");
  return response.data;
}

export function useGetPaymentsHistory() {
  return useQuery({
    queryKey: ["get-payments"],
    queryFn: getPaymentsHistory,
    retry: 3
  });
}
