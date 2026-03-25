import { successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";

async function getReceipt(params:number) {
    const res = await axiosInstance.get(`/api/payments/receipt/${params}`)
}


export function useGetReceipt(){
    return useMutation({
        mutationKey: ["get-receipt"],
        mutationFn: (id: number) => getReceipt(id),
    })
}