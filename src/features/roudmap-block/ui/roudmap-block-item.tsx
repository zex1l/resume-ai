import { RandomIconComponent } from '@/shared/ui/random-icon';

export const RoadmapBlockItem = ({
  description,
  title,
  items,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  items?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <div className="w-[36px] h-[36px] bg-white/10 rounded-md flex items-center justify-center">
          <RandomIconComponent />
        </div>
        <h2 className="text-2xl font-bold ">{title}</h2>
      </div>
      <div className=" pl-14 flex flex-col gap-5">
        <p className="text-gray-400 text-xl">{description}</p>
        <div className="flex flex-col gap-4 xl:grid grid-cols-2">{items}</div>
      </div>
    </div>
  );
};

export const RoadmapBlockInnerItem = ({
  resources,
  description,
  difficulty,
  title,
  index,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  difficulty?: React.ReactNode;
  resources: React.ReactNode;
  index?: number;
}) => {
  return (
    <div className="flex flex-col gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">
          {index}. {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-zinc-400 text-xs">Resources:</p>
          {resources}
        </div>
        {difficulty}
      </div>
    </div>
  );
};
