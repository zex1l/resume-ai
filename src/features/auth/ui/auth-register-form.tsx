import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

type AuthRegisterFormProps = {
  signIn: (data: FormDataRegistern) => void;
  step: string;
};

export type FormDataRegistern = {
  email: string;
  password: string;
  name: string;
  flow: string;
};

export const AuthRegisterForm = ({ signIn, step }: AuthRegisterFormProps) => {
  const { register, handleSubmit, formState } = useForm<FormDataRegistern>({
    mode: 'onChange',
  });

  const onSubmitHanlder = (data: FormDataRegistern) => {
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
        <label className="text-sm text-gray-400" htmlFor="email">
          Name
        </label>
        <Input
          {...register('name', {
            required: { value: true, message: 'Name is required' },
          })}
        />
        {formState.errors.name && (
          <span className="text-red-500 text-sm">
            {formState.errors.name.message}
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
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                'Password must be at least 8 characters long and contain at least one letter and one number',
            },
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
