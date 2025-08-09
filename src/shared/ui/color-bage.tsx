import { cn } from '../lib/utils';

export type BageColor = 'green' | 'red' | 'blue' | 'purple' | 'yellow';

type ColorBageProps = {
  color: BageColor;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const ColorBage = ({
  color = 'green',
  children,
  className,
  onClick,
}: ColorBageProps) => {
  const classNameBage = cn(
    'w-fit   cursor-pointer rounded-md px-2 py-1 text-xs uppercase tracking-widest text-white',
    {
      'bg-green-500': color === 'green',
      'bg-red-500': color === 'red',
      'bg-blue-500': color === 'blue',
      'bg-purple-500': color === 'purple',
      'bg-yellow-500': color === 'yellow',
    }
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={cn(classNameBage, className)}>
        {children}
      </button>
    );
  }

  return <div className={cn(classNameBage, className)}>{children}</div>;
};
