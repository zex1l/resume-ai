export const HeroContent = ({
  actions,
  description,
  title,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title}
      {description}
      {actions}
    </div>
  );
};
