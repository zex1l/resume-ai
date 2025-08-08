export const CardList = ({ cards }: { cards?: React.ReactNode }) => {
  return (
    <div className="grid w-full gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {cards}
    </div>
  );
};
