import { useAuthType } from './hooks/useAuthType';
import { AuthLayout } from './ui/auth-layout';
import { AuthLoginForm } from './ui/auth-login-form';
import { AuthRegisterForm } from './ui/auth-register-form';

export const Auth = () => {
  const { handleAuthType, authType, handleAuth, step } = useAuthType();

  switch (authType) {
    case 'login':
      return (
        <AuthLayout
          title={<h1 className="text-2xl font-bold">Login to your account</h1>}
          form={<AuthLoginForm signIn={handleAuth} step={step} />}
          footer={
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Don't have an account?
              <button onClick={() => handleAuthType('register')}>
                Sign Up
              </button>
            </div>
          }
        />
      );
    case 'register':
      return (
        <AuthLayout
          title={<h1 className="text-2xl font-bold">Create Account</h1>}
          form={<AuthRegisterForm signIn={handleAuth} step={step} />}
          footer={
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Already have an account?
              <button onClick={() => handleAuthType('login')}>Sign In</button>
            </div>
          }
        />
      );
  }
};
