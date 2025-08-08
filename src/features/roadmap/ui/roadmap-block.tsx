import { ROUTES } from '@/shared/constans/routes';
import { Link } from 'react-router-dom';

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
    <Link to={ROUTES.ROADMAP + `/${id}`}>
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
      {arrow}
    </Link>
  );
};
