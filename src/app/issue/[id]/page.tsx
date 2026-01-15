import { ArchiveIcon, MoveLeftIcon, ThumbsUpIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { getIssue } from "@/http/get-issue";
import { Button } from "@/components/button";
import { IssueCommentsList } from "./issue-comments/issue-comments-list";

interface IssuePageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: IssuePageProps): Promise<Metadata> => {
  const { id } = await params;
  const issue = await getIssue({ id });

  return {
    title: issue.title,
    description: issue.description,
  };
};

const statusLabels = {
  backlog: "Backlog",
  todo: "To do",
  in_progress: "In Progress",
  done: "Done",
} as const;

export default async function IssuePage({ params }: IssuePageProps) {
  const { id } = await params;
  const issue = await getIssue({ id });

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
        <span className="bg-navy-700 rounded-lg px-3 py-1.5 flex items-center gap-2 text-sm">
          <ArchiveIcon size={12} />
          {statusLabels[issue.status]}
        </span>
        <Button>
          <ThumbsUpIcon size={12} />
          <span className="text-sm">4</span>
        </Button>
      </div>

      <div className="space-y-2">
        <h1 className="font-semibold text-2xl">{issue.title}</h1>
        <p className="text-navy-100 text-sm leading-relaxed">
          {issue.description}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold">Comments</span>

        <div className="mt-3">
          <IssueCommentsList issueId={issue.id} />
        </div>
      </div>
    </main>
  );
}
