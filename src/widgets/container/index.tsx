export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full px-3 lg:px-10 xl:px-16 h-full myContainer">{children}</div>
  );
};
