type RoadmapBlockType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  subBlocks?: React.ReactNode;
  id: string;
  arrow?: React.ReactNode;
};
export const RoadmapBlock = ({
  title,
  description,
  subBlocks: subtitle,
  id,
  arrow,
}: RoadmapBlockType) => {
  return (
    <>
      <div
        data-id={id}
        className={`flex flex-col gap-2 w-[60%] bg-white/10 border border-white/10 rounded-2xl p-4 mx-auto`}
      >
        {title}
        {description}
        {subtitle}
      </div>
      {arrow}
    </>
  );
};
