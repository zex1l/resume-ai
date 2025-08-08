import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useForm } from 'react-hook-form';

type AuthLoginFormProps = {
  signIn: (data: FormDataLogin) => void;
  step: string;
};

export type FormDataLogin = {
  email: string;
  password: string;
  flow: string;
};

export const AuthLoginForm = ({ signIn, step }: AuthLoginFormProps) => {
  const { register, handleSubmit, formState } = useForm<FormDataLogin>({
    mode: 'onChange',
  });

  const onSubmitHanlder = (data: FormDataLogin) => {
    signIn(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHanlder)}
      className="flex flex-col gap-4"
    >
      <input
        {...register('flow', { required: true })}
        type="hidden"
        value={step}
      />
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-400" htmlFor="email">
          Email
        </label>
        <Input
          {...register('email', {
            required: { value: true, message: 'Email is required' },
          })}
        />
        {formState.errors.email && (
          <span className="text-red-500 text-sm">
            {formState.errors.email.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-400" htmlFor="password">
          Password
        </label>
        <Input
          {...register('password', {
            required: { value: true, message: 'Password is required' },
          })}
          type="password"
        />
        {formState.errors.password && (
          <span className="text-red-500 text-sm">
            {formState.errors.password.message}
          </span>
        )}
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
};
