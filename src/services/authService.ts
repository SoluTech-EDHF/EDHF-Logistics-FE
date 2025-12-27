import { api } from "./api/axios";
import { ENDPOINTS } from "./api/endpoints";

export type LoginPayload = {
  email: string;
  password: string;
};

export const login = (data: LoginPayload) =>
  api.post(ENDPOINTS.LOGIN, data, { skipAuth: true, withCredentials: false });
