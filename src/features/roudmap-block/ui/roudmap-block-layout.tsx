export const RoudmapBlockLayout = ({
  children,
  header,
}: {
  header?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-20 pb-10">
      {header}
      <div className="flex flex-col gap-25 ">{children}</div>
    </div>
  );
};
