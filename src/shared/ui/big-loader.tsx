import { Loader } from 'lucide-react';

export const BigLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader className="animate-spin" size={40} />
    </div>
  );
};
