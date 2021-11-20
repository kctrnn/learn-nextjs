import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface AuthProps {
  children: any;
}

export function Auth({ children }: AuthProps) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();

  useEffect(() => {
    if (!profile?.username && !firstLoading) router.push('/login');
  }, [profile, firstLoading, router]);

  if (!profile?.username) return <p>Loading...</p>;

  return <div>{children}</div>;
}
