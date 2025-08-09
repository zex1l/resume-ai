type RoadmapBlockType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  subBlocks?: React.ReactNode;
  id: string;
  line?: boolean;
};
export const RoadmapBlock = ({
  title,
  description,
  subBlocks: subtitle,
  id,
  line,
}: RoadmapBlockType) => {
  return (
    <div className="relative">
      <div
        onClick={(e) => console.log(e)}
        data-id={id}
        data-block
        className={`flex flex-col gap-2 w-[60%] bg-white/10 border border-white/10 rounded-2xl p-4 mx-auto select-none relative cursor-default z-10`}
      >
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-400">{description}</p>
        {subtitle}
      </div>
      {line && (
        <div className="h-[80px] w-[1px] bg-white/30 absolute bottom-[-80px] left-[50%] transform translate-x-[-50%]"></div>
      )}
    </div>
  );
};
