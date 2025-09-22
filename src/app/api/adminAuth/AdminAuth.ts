import { axiosInstance } from "../axiosInstance/AxiosInstance";
import { useApiStore } from "../apiStore/ApiStore";

interface LoginResponse {
  access: string;
  refresh: string;
}

export async function adminAuth(email: string, password: string): Promise<LoginResponse> {
  const res = await axiosInstance.post<LoginResponse>("/api/token/admin/", {
    email,
    password,
  });

  const { access, refresh } = res.data;
  useApiStore.getState().setTokens(access, refresh);

  return res.data;
}

export function logoutAdmin(): void {
  useApiStore.getState().clearTokens();
}
