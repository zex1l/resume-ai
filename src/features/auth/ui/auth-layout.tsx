export const AuthLayout = ({
  footer,
  form,
  title,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  form?: React.ReactNode;
}) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5 min-w-[500px] bg-white/5 rounded-lg border border-white/10 p-4">
        {title}
        {form}
        {footer}
      </div>
    </div>
  );
};
