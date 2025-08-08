export const HeroLayout = ({
  left,
  right,
}: {
  left?: React.ReactNode;
  right?: React.ReactNode;
}) => {
  return (
    <section className="flex gap-10 flex-col lg:grid lg:grid-cols-2 lg:items-center">
      {left}
      {right}
    </section>
  );
};
