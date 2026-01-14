import {
  ArchiveIcon,
  CheckCheckIcon,
  CheckIcon,
  CheckSquare2Icon,
  CircleDashedIcon,
  ListTodoIcon,
  MessageCircleIcon,
  ThumbsUpIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { listIssues } from "@/http/list-issues";

interface BoardProps {
  searchParams: Promise<{ q?: string }>;
}

export const metadata: Metadata = {
  title: "Board",
};

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams;
  const issues = await listIssues();

  return (
    <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Backlog
          </Section.Title>
          <Section.IssueCount>{issues.backlog.length}</Section.IssueCount>
        </Section.Header>
        <Section.Content>
          {issues.backlog.map((issue) => (
            <Card.Root key={issue.id}>
              <Card.Header>
                <Card.Number>ISS-{issue.issueNumber}</Card.Number>
                <Card.Title>{issue.title}</Card.Title>
              </Card.Header>
              <Card.Footer>
                <Button>
                  <ThumbsUpIcon size={12} />
                  <span className="text-sm">4</span>
                </Button>
                <Button>
                  <MessageCircleIcon size={12} />
                  <span className="text-sm">2</span>
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ListTodoIcon className="size-3" />
            To-do
          </Section.Title>
          <Section.IssueCount>{issues.todo.length}</Section.IssueCount>
        </Section.Header>
        <Section.Content>
          {issues.todo.map((issue) => (
            <Card.Root key={issue.id}>
              <Card.Header>
                <Card.Number>ISS-{issue.issueNumber}</Card.Number>
                <Card.Title>{issue.title}</Card.Title>
              </Card.Header>
              <Card.Footer>
                <Button>
                  <ThumbsUpIcon size={12} />
                  <span className="text-sm">4</span>
                </Button>
                <Button>
                  <MessageCircleIcon size={12} />
                  <span className="text-sm">2</span>
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <CircleDashedIcon className="size-3" />
            In Progress
          </Section.Title>
          <Section.IssueCount>{issues.in_progress.length}</Section.IssueCount>
        </Section.Header>
        <Section.Content>
          {issues.in_progress.map((issue) => (
            <Card.Root key={issue.id}>
              <Card.Header>
                <Card.Number>ISS-{issue.issueNumber}</Card.Number>
                <Card.Title>{issue.title}</Card.Title>
              </Card.Header>
              <Card.Footer>
                <Button>
                  <ThumbsUpIcon size={12} />
                  <span className="text-sm">4</span>
                </Button>
                <Button>
                  <MessageCircleIcon size={12} />
                  <span className="text-sm">2</span>
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <CheckCheckIcon className="size-3" />
            Done
          </Section.Title>
          <Section.IssueCount>{issues.done.length}</Section.IssueCount>
        </Section.Header>
        <Section.Content>
          {issues.done.map((issue) => (
            <Card.Root key={issue.id}>
              <Card.Header>
                <Card.Number>ISS-{issue.issueNumber}</Card.Number>
                <Card.Title>{issue.title}</Card.Title>
              </Card.Header>
              <Card.Footer>
                <Button>
                  <ThumbsUpIcon size={12} />
                  <span className="text-sm">4</span>
                </Button>
                <Button>
                  <MessageCircleIcon size={12} />
                  <span className="text-sm">2</span>
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Section.Content>
      </Section.Root>
    </main>
  );
}
