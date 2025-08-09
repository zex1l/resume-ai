export const HeaderLayout = ({
  actions,
  logo,
  nav,
}: {
  logo?: React.ReactNode;
  nav?: React.ReactNode;
  actions?: React.ReactNode;
}) => {
  return (
    <div className="w-full px-3 lg:px-10 xl:px-16  py-4 border-b border-white/10 bg-background fixed top-0 left-0 right-0 z-50">
      <div className=" flex items-center justify-between">
        {logo}
        <div className="hidden lg:flex items-center">{nav}</div>
        {actions}
      </div>
    </div>
  );
};
