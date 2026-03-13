import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { loginUser, type LoginCredentials } from "@/lib/api/auth.api";
import { useToken } from "./useToken";
import { toast } from "sonner";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useToken();
  const navigate = useNavigate();

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const response = await loginUser(credentials);

      if (response.success) {
        // Save token
        setToken(response.data.token);

        // Show success message
        toast.success(response.message || "Login successful!");

        // Log user data (optional)
        console.log("User data:", response.data.user);

        // Navigate to home page
        window.location.href = "/";

        return { success: true, data: response.data };
      }
    } catch (error: unknown) {
      // Handle error
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "Login failed. Please try again.";

      toast.error(errorMessage);
      console.error("Login error:", error);

      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
  };
};
