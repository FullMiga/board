import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Loading() {
  return (
    <main className="max-w-225 mx-auto w-full flex flex-col gap-4 p-6 bg-navy-800 border-[0.5px] border-navy-500 rounded-xl">
      <Link
        href="/"
        className="flex items-center gap-2 text-navy-200 hover:text-navy-100"
      >
        <MoveLeftIcon size={14} />
        <span className="text-sm">Back to board</span>
      </Link>

      <div className="flex items-center gap-2">
        <div className="bg-navy-700 rounded-lg w-24 h-8 animate-pulse" />
        <div className="bg-navy-700 rounded-lg w-24 h-8 animate-pulse" />
      </div>

      <div className="space-y-2">
        <div className="bg-navy-700 rounded-lg w-4/5 h-8 animate-pulse" />
        <div className="space-y-1.5">
          <div className="bg-navy-700 rounded-lg w-3/5 h-6 animate-pulse" />
          <div className="bg-navy-700 rounded-lg w-2/5 h-6 animate-pulse" />
        </div>
      </div>
    </main>
  );
}
