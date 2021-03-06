import { useAuth } from '@/hooks/index';
import { LoginPayload } from '@/models/index';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

function LoginPage() {
  const router = useRouter();
  const { login, logout, profile } = useAuth({
    revalidateOnMount: false,
  });

  const handleLoginClick = async () => {
    // fake data
    const payload: LoginPayload = {
      username: 'better213',
      password: '123123',
    };

    try {
      await login(payload);
      console.log('redirect to dashboard');
      router.push('/');
    } catch (error) {
      console.log('Failed to login', error);
    }
  };

  const handleLogoutClick = async () => {
    try {
      await logout();
      console.log('redirect to home');
    } catch (error) {
      console.log('Failed to logout', error);
    }
  };

  // const handleGetProfileClick = async () => {
  //   const response = await authApi.getProfile();
  //   console.log(response);
  // };

  return (
    <Box>
      <Typography component="h1" variant="h5" color="primary.main">
        Login Page
      </Typography>

      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={handleGetProfileClick}>Get profile</button> */}
      <button onClick={handleLogoutClick}>Logout</button>

      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
    </Box>
  );
}

export default LoginPage;
