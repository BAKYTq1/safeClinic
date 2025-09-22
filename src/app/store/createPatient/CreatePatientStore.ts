// src/store/CreatePatientStore.ts
import { create } from "zustand";
import axios from "axios";

export interface Patient {
  id?: number; // новый пациент может не иметь id
  full_name: string;
  gender: "male" | "female";
  phone: string;
  birth_date: string;
  address: string;
  complaints: string;
}

interface CreatePatientState {
  loading: boolean;
  addPatient: (patient: Patient) => Promise<void>;
}

export const useCreatePatientStore = create<CreatePatientState>((set) => ({
  loading: false,

  addPatient: async (patient) => {
    set({ loading: true });
    try {
      // Берем токен из localStorage
      const token = localStorage.getItem("refreshToken");

      const res = await axios.post<Patient>(
        "https://safeclinic-production.up.railway.app/list_patients/patients/",
        patient,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        }
      );

      console.log("Пациент успешно добавлен:", res.data);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Ошибка при добавлении пациента:",
          error.response?.data || error.message
        );
      } else {
        console.error("Неизвестная ошибка:", error);
      }
    } finally {
      set({ loading: false });
    }
  },
}));
