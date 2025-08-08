export const FaqItem = ({
  description,
  title,
  open,
  actions,
  onClick,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  open?: boolean;
  actions?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div className="w-full border-t border-white/10 py-5 flex flex-col gap-5 select-none lg:max-w-[800px]">
      <div
        onClick={onClick}
        className="flex items-center justify-between cursor-pointer"
      >
        {title}
        {actions}
      </div>
      {open && <div>{description}</div>}
    </div>
  );
};

export type FaqItemType = {
  title: string;
  description: string;
  open: boolean;
  id: number;
};
