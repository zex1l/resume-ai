export const RoudmapBlockHeader = ({
  description,
  title,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <p className="text-gray-400 text-xl text-center">{description}</p>
    </div>
  );
};
