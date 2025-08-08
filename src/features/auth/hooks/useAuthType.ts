import { useAuthActions } from '@convex-dev/auth/react';
import { useState } from 'react';
import type { FormDataLogin } from '../ui/auth-login-form';
import type { FormDataRegistern } from '../ui/auth-register-form';
import { useNavigate } from 'react-router-dom';

export type StepType = 'signIn' | 'signUp';

const step = {
  login: 'signIn',
  register: 'signUp',
};

export const useAuthType = () => {
  const [authType, setAuthType] = useState<'login' | 'register'>('login');
  const { signIn } = useAuthActions();
  const navigate = useNavigate();

  const handleAuthType = (type: 'login' | 'register') => {
    setAuthType(type);
  };

  const handleAuth = async (data: FormDataLogin | FormDataRegistern) => {
    const { signingIn } = await signIn('password', data);
    if (signingIn) navigate('/');
  };

  return {
    handleAuthType,
    authType,
    handleAuth,
    step: step[authType],
  };
};
