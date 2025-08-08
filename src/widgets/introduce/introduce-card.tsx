export const IntroduceCard = ({
  description,
  icon,
  title,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-white/5 border border-white/10 p-4 flex flex-col gap-3 rounded-2xl">
      {icon && (
        <div className="w-[50px] h-[50px] bg-white/10 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      )}
      {title && <div className="font-bold">{title}</div>}
      {description && <div className="text-gray-400">{description}</div>}
    </div>
  );
};
