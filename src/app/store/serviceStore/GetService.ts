import { create } from "zustand";
import { axiosInstance } from "../../../../src/app/api/axiosInstance/AxiosInstance"

export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  photo: string;
}

interface GetService {
  services: Service[];
  getServices: () => Promise<void>;
  deleteService: (id: number) => Promise<void>;
  setServices: (services: Service[]) => void;
}

export const useServiceStore = create<GetService>((set) => ({
  services: [],

  setServices: (services) => set({ services }), 

  getServices: async () => {
    try {
      const res = await axiosInstance.get<Service[]>("/services/services/");
      set({ services: res.data });
    } catch (error) {
      console.error("Ошибка при загрузке услуг:", error);
    }
  },

  deleteService: async (id) => {
    try {
      await axiosInstance.delete(`/services/services/${id}/`);
      set((state) => ({
        services: state.services.filter((service) => service.id !== id),
      }));
    } catch (error) {
      console.error("Ошибка при удалении услуги:", error);
    }
  },
}));
