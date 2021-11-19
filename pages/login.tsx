import { authApi } from '@/api/auth-api';
import { LoginPayload } from '@/models/auth';

function LoginPage() {
  const handleLoginClick = async () => {
    // fake data
    const payload: LoginPayload = {
      username: 'better213',
      password: '123123',
    };

    await authApi.login(payload);
  };

  const handleLogoutClick = async () => {
    await authApi.logout();
  };

  const handleGetProfileClick = async () => {
    const response = await authApi.getProfile();
    console.log(response);
  };

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

export default LoginPage;
