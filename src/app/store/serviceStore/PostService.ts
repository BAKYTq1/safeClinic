import { create } from "zustand";
import { axiosInstance } from "../../../app/api/axiosInstance/AxiosInstance"

interface Service {
  name: string;
  price: string;
  description: string;
  category: number;
  photo: File | null;
  branch_id: number;
  is_active: boolean;
  duration_minutes: number;
}

interface ServiceState {
  loading: boolean;
  error: string | null;
  success: boolean;
  createService: (data: Service) => Promise<void>;
}

export const useCreateServiceStore = create<ServiceState>((set) => ({
  loading: false,
  error: null,
  success: false,

  createService: async (data: Service) => {
    try {
      set({ loading: true, error: null, success: false });

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("category", String(data.category));
      formData.append("branch_id", String(data.branch_id));
      formData.append("is_active", String(data.is_active));
      formData.append("duration_minutes", String(data.duration_minutes));
      if (data.photo) formData.append("photo", data.photo);

      await axiosInstance.post("/services/services/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      

      set({ success: true });
    } catch (err: any) {
      set({ error: err.response?.data?.detail || "Ошибка при создании услуги" });
    } finally {
      set({ loading: false });
    }
  },
}));