import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import z from "zod";

type UpdateImage = {
  image: File;
};

//   Schema
export const ProfileSchema = z.object({
  firstname: z
    .string()
    .min(3, "First Name is required and must be  3 letters ")
    .regex(/^[A-Za-z]+$/, "Name must be letters ony"),
  lastname: z
    .string()
    .min(3, "First Name is required and must be  3 letters ")
    .regex(/^[A-Za-z]+$/, "Name must be letters ony"),
  email: z.string().email("Please enter a valid email!"),
  phone: z
    .string()
    .regex(
      /^\+[1-9]\d{10,14}$/,
      "Enter a valid phone number (e.g. +201018191919)",
    ),
  preferred_languages: z
    .array(z.enum(["en", "ar", "fr", "de"]))
    .min(1, "Select at least one language"),
});

export type UpdateProfile = z.infer<typeof ProfileSchema>;

async function getUerProfile() {
  const response = await axiosInstance.get("/api/profile");
  return response.data;
}

async function updateImage(params: UpdateImage) {
  const formData = new FormData();
  formData.append("image", params.image);

  const response = await axiosInstance.post("/api/profile/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

async function updateProfile(params: UpdateProfile) {
  const response = axiosInstance.put("/api/profile/info", params);
  return (await response).data;
}

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateProfile) => updateProfile(data),
    mutationKey: ["update-profile"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user-profile"] });
      successToast("Updated Successfully");
    },
    onError: () => errorToast("Update Failed"),
  });
};

export const useUpdateImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateImage) => updateImage(data),
    mutationKey: ["update-image"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user-profile"] });
      successToast("Image Updated");
    },
    onError: () => errorToast("Failed to update the image"),
  });
};

export function useGetProfile() {
  return useQuery({
    queryKey: ["get-user-profile"],
    queryFn: getUerProfile,
    retry: 2,
    retryDelay: 2000,
  });
}
