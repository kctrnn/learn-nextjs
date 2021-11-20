import { authApi } from '@/api/auth-api';
import { LoginPayload } from '@/models/auth';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

// custom hook
export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    isValidating,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000, // 1hr
    revalidateOnFocus: false,
    ...options,
  });

  const login = async (payload: LoginPayload) => {
    await authApi.login(payload);
    await mutate();
  };

  const logout = async () => {
    await authApi.logout();
    await mutate(null, false);
  };

  return {
    profile,
    login,
    logout,
  };
}
