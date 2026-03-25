import axiosInstance from "@/lib/Axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

async function getDashboard() {
    const response = await axiosInstance.get("/api/dashboard")
    return response.data
}


export function useGetDashboard(){
  return useQuery({
    queryKey: ["user-dashboard"],
    queryFn: getDashboard,
    retry: 2,
    retryDelay: 2000, 
  });
}