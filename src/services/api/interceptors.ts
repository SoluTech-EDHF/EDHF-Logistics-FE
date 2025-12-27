import { api } from "./axios";
import type { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

// allow a per-request skip flag for the auth interceptor
declare module "axios" {
  interface AxiosRequestConfig {
    skipAuth?: boolean;
  }
}

export default function registerInterceptors(
  getToken: () => string | undefined | null,
) {
  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // If the request explicitly opts out, do nothing.
    if ((config as AxiosRequestConfig).skipAuth) return config;

    const token = getToken();
    if (token) {
      const headers = config.headers as Record<string, unknown> | undefined;
      config.headers = {
        ...(headers ?? {}),
        Authorization: `Bearer ${token}`,
      } as unknown as typeof config.headers;
    }
    return config;
  });
}
