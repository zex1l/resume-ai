export const Tag = ({
  onClick,
  title,
  value,
}: {
  title: string;
  value: string | number;
  onClick?: (value: string | number) => void;
}) => {
  return (
    <div
      onClick={() => onClick && onClick(value)}
      className="w-fit bg-white/10 border border-white/35 cursor-pointer rounded-md px-2 py-1 text-xs uppercase tracking-widest text-white"
    >
      {title}
    </div>
  );
};
