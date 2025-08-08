export const IntroduceLayout = ({
  cards,
  description,
  title,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  cards?: React.ReactNode;
}) => {
  return (
    <section className="flex items-center flex-col gap-10">
      <div className="flex items-center justify-center flex-col gap-5 max-w-[500px] lg:max-w-[700px]">
        {title}
        {description}
      </div>
      {cards}
    </section>
  );
};
