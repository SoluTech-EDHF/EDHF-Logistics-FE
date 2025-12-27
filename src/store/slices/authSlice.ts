export interface User {
  id: string;
  username?: string;
  email?: string;
  image?: string;
}

export interface AuthSlice {
  version: number;
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  setUser: (user: User | null) => void;
  setToken: (token: string) => void;
  setAuthenticated: (value: boolean) => void;
  logout: () => void;
}

import type { StateCreator } from "zustand";

export const authSlice: StateCreator<AuthSlice> = (set) => ({
  version: 1,
  user: null,
  token: null,
  isAuthenticated: false,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setAuthenticated: (value) => set({ isAuthenticated: value }),
  logout: () => set({ user: null, isAuthenticated: false }),
});

export default authSlice;
