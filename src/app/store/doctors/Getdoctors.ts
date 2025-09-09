import { create } from "zustand";
import axios from "axios";

export interface Doctor {
  id: number;
  name: string;
  email: string;
  tags: string;
  clients: string;
  birth_date: string;
  address: string;
  phone: string;
  gender: string;
}

interface DoctorsState {
  doctors: Doctor[];
  loading: boolean;
  fetchDoctors: () => Promise<void>;
}

export const useGetDoctors = create<DoctorsState>((set) => ({
  doctors: [],
  loading: false,

  fetchDoctors: async () => {
    set({ loading: true });
    try {
      const res = await axios.get<Doctor[]>(
        "https://safeclinic-production.up.railway.app/list_doctor/doctors/",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      set({ doctors: res.data, loading: false });
    } catch (error) {
      console.error("Докторлорду алып келүүдө ката:", error);
      set({ loading: false });
    }
  },
}));
