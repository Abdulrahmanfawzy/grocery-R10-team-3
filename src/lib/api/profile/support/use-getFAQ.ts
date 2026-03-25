import axiosInstance from "@/lib/Axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

async function getFAQ() {
  const res = await axiosInstance.get("/api/faqs");
  return res.data;
}

export function useGetFAQ() {
  return useQuery({
    queryKey: ["get-faq"],
    queryFn: getFAQ,
  });
}
