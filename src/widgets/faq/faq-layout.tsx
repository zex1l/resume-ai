export const FaqLayout = ({
  description,
  title,
  items,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  items?: React.ReactNode;
}) => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        {title}
        {description}
      </div>
      <div className="flex flex-col items-center justify-center">{items}</div>
    </section>
  );
};
