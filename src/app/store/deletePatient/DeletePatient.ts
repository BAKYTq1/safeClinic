// src/store/DeletePatient/DeletePatient.ts
import { create } from "zustand";
import axios from "axios";

export const useDeletePatient = create<{
  loading: boolean;
  deletePatient: (id: number) => Promise<boolean>;
}>((set) => ({
  loading: false,

  deletePatient: async (id: number) => {
    set({ loading: true });
    try {
      // Достаём токен из localStorage
      const token = localStorage.getItem("refreshToken");

      await axios.delete(
        `https://safeclinic-production.up.railway.app/list_patients/patients/${id}/`,
        {
          headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        }
      );

      console.log(`Пациент с id=${id} успешно удалён.`);
      return true;
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        console.error(
          "Ошибка при удалении:",
          err.response?.data || err.message
        );
      } else {
        console.error("Неизвестная ошибка:", err);
      }
      return false;
    } finally {
      set({ loading: false });
    }
  },
}));
