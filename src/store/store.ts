import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { appSlice, authSlice, type AppSlice, type AuthSlice } from "./slices";

export type AppState = AuthSlice & AppSlice;

export const useAppStore = create<AppState>()(
  devtools(
    persist<AppState>(
      (set, get, api) => ({
        ...authSlice(set, get, api),
        ...appSlice(set, get, api),
      }),
      {
        name: "edhf-logistics-storage-v1",
        version: 2,
      },
    ),
    {
      enabled: import.meta.env.DEV,
      name: "AppStore",
    },
  ),
);
