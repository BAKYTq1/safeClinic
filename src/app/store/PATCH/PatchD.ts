import { create } from "zustand";
import axios from "axios";

export interface Patient {
  id: number;
  full_name: string;
  gender: "male" | "female";
  phone: string;
  birth_date: string;
  address: string;
  complaints?: string;
}

interface PatchPatientState {
  loading: boolean;
  error: string | null;
  patchPatient: (id: number, data: Partial<Patient>) => Promise<Patient | null>;
}

export const usePatchPatient = create<PatchPatientState>((set) => ({
  loading: false,
  error: null,

  patchPatient: async (id, data) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.patch<Patient>(
        `https://safeclinic-production.up.railway.app/list_patients/patients/${id}/`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      set({ loading: false });
      return res.data;
    } catch (error: any) {
      console.error("Пациентти өзгөртүүдөн ката:", error);
      set({ loading: false, error: error.message });
      return null;
    }
  },
}));
