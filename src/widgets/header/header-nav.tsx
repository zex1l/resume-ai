export const HeaderNav = ({ items }: { items?: React.ReactNode }) => {
  return (
    <nav>
      <ul className="flex gap-10 items-center">{items}</ul>
    </nav>
  );
};
