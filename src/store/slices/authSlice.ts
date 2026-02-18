export interface User {
  id: string;
  username?: string;
  email?: string;
  image?: string;
}

type UserRole = "Admin" | "Rider" | "User" | null;

export interface AuthSlice {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  typeOfUser: UserRole;

  setUser: (user: User | null) => void;
  setToken: (token: string) => void;
  setAuthenticated: (value: boolean) => void;
  setLoading: (value: boolean) => void;
  setTypeOfUser: (value: UserRole) => void;
  logout: () => void;
}

import type { StateCreator } from "zustand";

export const authSlice: StateCreator<AuthSlice> = (set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  typeOfUser: null,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setAuthenticated: (value) => set({ isAuthenticated: value }),
  setLoading: (value) => set({ isLoading: value }),
  setTypeOfUser: (value) => set({ typeOfUser: value }),
  logout: () =>
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      typeOfUser: null,
      isLoading: false,
    }),
});

export default authSlice;
