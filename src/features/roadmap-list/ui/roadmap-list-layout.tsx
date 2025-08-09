export const RoadmapListLayout = ({
  actions,
  children,
  header,
  filters,
}: {
  header?: React.ReactNode;
  actions?: React.ReactNode;
  filters?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {header}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">{filters}</div>
        <div className="flex items-center gap-2">{actions}</div>
      </div>
      {children}
    </div>
  );
};

export const RoadmapListHeader = ({
  description,
  title,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {title && <h1 className="text-3xl font-bold">{title}</h1>}
        {description && <p className="text-gray-400">{description}</p>}
      </div>
    </>
  );
};
