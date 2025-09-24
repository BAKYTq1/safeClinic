import axios from "axios";
import { create } from "zustand";

export interface Patient {
  id: number;
  full_name: string;
  gender: string;
  phone: string;
  birth_date: string;
  address: string;
  complaints: string;
}

interface PatientState {
  patients: Patient[];
  loading: boolean;
  fetchPatients: () => Promise<void>;
  getPatientById: (id: number) => Patient | undefined; 
}


export const usePatientStore = create<PatientState & {
  updatePatientDate: (id: number, newDate: string) => void;
}>((set, get) => ({
  patients: [],
  loading: false,

  fetchPatients: async () => {
    set({ loading: true });
    try {
      const token = localStorage.getItem("refreshToken");
      const res = await axios.get<Patient[]>(
        "https://safeclinic-production.up.railway.app/list_patients/patients/",
        {
          headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        }
      );
      set({ patients: res.data });
    } catch (error: any) {
      console.error("Ошибка при загрузке пациентов:", error);
    } finally {
      set({ loading: false });
    }
  },

  getPatientById: (id: number) => {
    const { patients } = get();
    return patients.find((p) => p.id === id);
  },

  updatePatientDate: (id: number, newDate: string) => {
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === id ? { ...p, birth_date: newDate } : p
      ),
    }));
  },
}));