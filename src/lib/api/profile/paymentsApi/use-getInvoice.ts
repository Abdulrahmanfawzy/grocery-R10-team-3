import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";

async function getInvoice(params: number) {
  const response = await axiosInstance.get(`/api/payments/invoice/${params}`);
  return response.data;
}

export function useGetInvoice() {
  return useMutation({
    mutationKey: ["get-invoice"],
    mutationFn: (id: number) => getInvoice(id),
  });
}
