import axiosInstance from "@/lib/axiosInstance";

export interface AddressItem {
  id: number;
  full_name: string;
  phone: string;
  street_address: string;
  city: string;
  is_default?: boolean;
  [key: string]: unknown;
}

export interface AddressesResponse {
  data: AddressItem[];
}

export const getAddresses = async (): Promise<AddressItem[]> => {
  const response = await axiosInstance.get<AddressesResponse>("/api/addresses");
  return response.data.data ?? response.data;
};

export interface CreateAddressPayload {
  full_name: string;
  phone: string;
  street_address: string;
  city: string;
}

export const createAddress = async (
  payload: CreateAddressPayload
): Promise<{ data: AddressItem }> => {
  const formData = new FormData();
  formData.append("full_name", payload.full_name);
  formData.append("phone", payload.phone);
  formData.append("street_address", payload.street_address);
  formData.append("city", payload.city);
  const response = await axiosInstance.post("/api/addresses", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
