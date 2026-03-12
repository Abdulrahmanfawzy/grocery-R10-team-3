import axiosInstance from "@/lib/Axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

async function getAddresses() {
    const res = await axiosInstance.get("/api/addresses")
    return res.data
}

export function useGetAddress(){
    return useQuery({
        queryKey: ["get-addresses"],
        queryFn: getAddresses
    })
}