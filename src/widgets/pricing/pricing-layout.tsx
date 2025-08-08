export const PricingLayout = ({
  cards,
  description,
  title,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  cards?: React.ReactNode;
}) => {
  return (
    <section className=" flex flex-col gap-10 border-b border-white/10 py-20!">
      <div className="flex flex-col gap-4 ">
        {title}
        {description}
      </div>
      {cards}
    </section>
  );
};
