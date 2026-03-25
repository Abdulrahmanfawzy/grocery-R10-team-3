import axiosInstance from "../Axios/axiosInstance";

export interface LoginCredentials {
  login: string;
  password: string;
}

export interface SignupCredentials {
  username: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
  agree_terms: number;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: number;
      username: string;
      email: string;
      phone: string;
    };
    token: string;
  };
}

export interface SignupResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: number;
      username: string;
      email: string;
      phone: string;
      created_at: string;
    };
    token: string;
  };
}

export interface ApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

export const loginUser = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>(
    "/api/auth/login",
    credentials,
  );
  return response.data;
};

export const registerUser = async (
  credentials: SignupCredentials,
): Promise<SignupResponse> => {
  const response = await axiosInstance.post<SignupResponse>(
    "/api/auth/register",
    credentials,
  );
  return response.data;
};

// Logout API (if needed)
export const logoutUser = async (): Promise<void> => {
  await axiosInstance.post("/api/auth/logout");
};

export const refreshToken = async (): Promise<{ token: string }> => {
  const response = await axiosInstance.post<{ token: string }>(
    "/api/auth/refresh",
  );
  return response.data;
};

export default {
  loginUser,
  registerUser,
  logoutUser,
  refreshToken,
};
