import { useAuthActions } from '@convex-dev/auth/react';
import { useState } from 'react';
import type { FormDataLogin } from '../ui/auth-login-form';
import type { FormDataRegistern } from '../ui/auth-register-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

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
    try {
      const { signingIn } = await signIn('password', data);

      if (!signingIn) {
        throw new Error('Failed to sign in');
      }

      toast.success('You are signed in successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to sign in, please try again');
    }
  };

  return {
    handleAuthType,
    authType,
    handleAuth,
    step: step[authType],
  };
};
