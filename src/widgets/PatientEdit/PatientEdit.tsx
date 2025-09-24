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

interface PatientEditState {
  patients: Patient[];
  editingPatient: Patient | null;

  // управление модалкой
  openEdit: (patient: Patient) => void;
  closeEdit: () => void;

  // операции
  setPatients: (patients: Patient[]) => void;
  updatePatient: (patient: Patient) => void;
}

export const usePatientEditStore = create<PatientEditState>((set) => ({
  patients: [],
  editingPatient: null,

  openEdit: (patient) => set({ editingPatient: patient }),
  closeEdit: () => set({ editingPatient: null }),

  setPatients: (patients) => set({ patients }),

  updatePatient: (patient) =>
    set((state) => ({
      patients: state.patients.map((p) =>
  Number(p.id) === Number(patient.id) ? patient : p
),

      editingPatient: null, // закрываем модалку после обновления
    })),
}));

 
