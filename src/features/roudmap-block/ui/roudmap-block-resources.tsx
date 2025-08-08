export const RoadmapBlockResourcesList = ({
  list,
}: {
  list?: React.ReactNode;
}) => {
  return <div className="flex items-center flex-wrap gap-4">{list}</div>;
};

export const RoadmapBlockResourcesItem = ({
  title,
  url,
}: {
  title: string;
  url: string;
}) => {
  return (
    <a href={url} target="_blank" className="text-blue-500 underline">
      {title}
    </a>
  );
};
