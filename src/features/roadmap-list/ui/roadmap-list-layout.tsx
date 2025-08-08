export const RoadmapListLayout = ({
  actions,
  children,
  description,
  filters,
  title,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  filters?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        {title}
        {description}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">{filters}</div>
        <div className="flex items-center gap-2">{actions}</div>
      </div>
      {children}
    </div>
  );
};
