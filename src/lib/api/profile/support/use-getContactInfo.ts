import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

async function getContact() {
  const res = await axiosInstance.get("/api/settings");
  return res.data;
}

export function useGetContact() {
  return useQuery({
    queryKey: ["get-contact"],
    queryFn: getContact,
  });
}
