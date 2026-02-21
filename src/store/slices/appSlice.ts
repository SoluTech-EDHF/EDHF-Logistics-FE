import type { StateCreator } from "zustand";

export interface AppSlice {
  dashboardSession: string | null;

  setDashboardSession: (dashboardSession: string | null) => void;
}

export const appSlice: StateCreator<AppSlice> = (set) => ({
  dashboardSession: null,

  setDashboardSession: (dashboardSession) => set({ dashboardSession }),
});

export default appSlice;
