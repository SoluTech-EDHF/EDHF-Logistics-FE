import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { authSlice, type AuthSlice } from "./slices";

export type AppState = AuthSlice;

export const useAppStore = create<AppState>()(
  devtools(
    persist<AppState>(
      (set, get, api) => ({
        ...authSlice(set, get, api),
      }),
      {
        name: "edhf-logistics-storage-v1",
        version: 1,
      },
    ),
    {
      enabled: import.meta.env.DEV,
      name: "AppStore",
    },
  ),
);
