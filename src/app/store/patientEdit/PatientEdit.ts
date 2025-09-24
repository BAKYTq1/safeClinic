// store/usePatientEditStore.ts
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
  doctor?: string;
  appointmentDate?: string;
  appointmentTime?: string;
}

interface PatientEditState {
  patients: Patient[];
  editingPatient: Patient | null;
  loading: boolean;

  setPatients: (patients: Patient[]) => void;
  openEdit: (patient: Patient) => void;
  closeEdit: () => void;

  updatePatient: (patient: Patient) => Promise<void>;
}

export const usePatientEditStore = create<PatientEditState>((set) => ({
  patients: [],
  editingPatient: null,
  loading: false,

  setPatients: (patients) => set({ patients }),
  openEdit: (patient) => set({ editingPatient: patient }),
  closeEdit: () => set({ editingPatient: null }),

  updatePatient: async (patient) => {
    set({ loading: true });
    try {
      const token = localStorage.getItem("refreshToken");
      const res = await axios.put(
        `https://safeclinic-production.up.railway.app/list_patients/patients/${patient.id}/`,
        patient,
        {
          headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        }
      );

      set((state) => ({
        patients: state.patients.map((p) =>
          p.id === patient.id ? res.data : p
        ),
        editingPatient: null, // модалка закрывается после успешного обновления
      }));
    } catch (error) {
      console.error("Ошибка при обновлении пациента:", error);
      alert("Не удалось обновить пациента.");
    } finally {
      set({ loading: false });
    }
  },
}));
