import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import authSlice, { type AuthSlice } from "./slices/authSlice";
// import settingsSlice, { type SettingsSlice } from "./slices/settingsSlice";

export type AppState = AuthSlice;
// export type AppState = AuthSlice & SettingsSlice;

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get, api) =>
        ({
          ...authSlice(set, get, api),
          // ...settingsSlice(set, get, api),
        }) as AppState,
      {
        name: "edhf-logistics-storage",
        version: 1,
      },
    ),
    {
      enabled: import.meta.env.VITE_NODE_ENV !== "production",
    },
  ),
);
