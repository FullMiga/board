"use client";

import { MoveLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex items-center gap-2 text-navy-200 hover:text-navy-100 cursor-pointer"
    >
      <MoveLeftIcon size={14} />
      <span className="text-sm">Back to board</span>
    </button>
  );
}
