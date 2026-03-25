import axiosInstance from "@/lib/axiosInstance";

export interface SpecialNote {
  id: number;
  name: string;
}

export const getSpecialNotes = async (): Promise<SpecialNote[]> => {
  const response = await axiosInstance.get("/api/special-notes");
  return response.data.data;
};
