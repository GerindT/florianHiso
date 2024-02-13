// const colors = [
//   "badge badge-default",
//   "badge badge-neutral",
//   "badge badge-primary",
//   "badge badge-secondary",
//   "badge badge-accent",
//   "badge badge-ghost",
//   "badge badge-outline",
//   "badge badge-success",
//   "badge badge-error",
//   "badge badge-warning",
//   "badge badge-info",
//   "badge badge-dark",
// ];

type Badge = {
  name: string;
  color: string;
};

type BadgeListProps = {
  badgeList: Badge[];
};

export default function BadgeList({ badgeList }: BadgeListProps) {
  return (
    <div className="w-86 pt-[1em] flex flex-wrap gap-1  ">
      <>
        {badgeList
          .sort(() => Math.random() - 0.5) // Shuffle the array
          .map((badge: Badge, i: number) => (
            <div
              key={i}
              className={`badge ${badge.color} cursor-pointer  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
            >
              {badge.name}
            </div>
          ))}
      </>
    </div>
  );
}
