export default async function BoardLoading() {
  return (
    <div className="grid grid-cols-4 gap-5 flex-1 items-stretch">
      <div className="bg-navy-800 h-full rounded-xl animate-pulse" />
      <div className="bg-navy-800 h-full rounded-xl animate-pulse" />
      <div className="bg-navy-800 h-full rounded-xl animate-pulse" />
      <div className="bg-navy-800 h-full rounded-xl animate-pulse" />
    </div>
  );
}
