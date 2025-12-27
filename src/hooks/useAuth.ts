import { login as loginService, type LoginPayload } from "@/services";
import { useAppStore } from "@/store";

export function useAuth() {
  const { token, setToken } = useAppStore();

  const login = async (data: LoginPayload) => {
    const res = await loginService(data);
    setToken(res.data.token);
  };

  return { token, login };
}
