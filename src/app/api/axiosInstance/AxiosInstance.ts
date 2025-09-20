import axios from "axios";
import { useApiStore } from "../apiStore/ApiStore"

export const API_URL = "https://safeclinic-production.up.railway.app";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor → access кошобуз
axiosInstance.interceptors.request.use((config) => {
  const { accessToken } = useApiStore.getState();
  if (accessToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return config;
});

// Response interceptor → refresh иштетебиз
let isRefreshing = false;

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !isRefreshing) {
      isRefreshing = true;
      try {
        const { refreshToken, setTokens, clearTokens } = useApiStore.getState();

        if (refreshToken) {
          const res = await axios.post(`${API_URL}/api/token/refresh/`, {
            refresh: refreshToken,
          });

          setTokens(res.data.access, refreshToken);

          originalRequest.headers["Authorization"] = `Bearer ${res.data.access}`;
          isRefreshing = false;

          return axiosInstance(originalRequest); // 🔄 retry
        } else {
          clearTokens();
        }
      } catch (err) {
        useApiStore.getState().clearTokens();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);
