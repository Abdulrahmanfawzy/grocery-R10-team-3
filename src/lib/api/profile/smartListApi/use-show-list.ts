import axiosInstance from "@/lib/Axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

async function showList(id: number) {
  const res = await axiosInstance.get(`/api/smart-lists/${id}`);
  return res.data;
}

export function useShowList(id: number) {
  return useQuery({
    queryKey: ["show-list", id],
    queryFn: () => showList(id),
  });
}
