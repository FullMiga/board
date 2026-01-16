import type { Metadata } from "next";
import { listIssues } from "@/http/list-issues";
import { BoardContent } from "./board-content";

interface BoardProps {
  searchParams: Promise<{ q?: string }>;
}

export const metadata: Metadata = {
  title: "Board",
};

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams;
  const issues = await listIssues({ search: q });

  return <BoardContent issues={issues} />;
}
