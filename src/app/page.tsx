import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <div className="max-w-405 w-full mx-auto p-10 flex flex-col gap-8 h-dvh">
      <div></div>
      <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
        {/* First Column*/}
        <Section.Root>
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              Backlog
            </Section.Title>
            <Section.IssueCount>8</Section.IssueCount>
          </Section.Header>
          {/* Content */}
          <Section.Content>
            <Card.Root>
              <Card.Header>
                <Card.Number>ECO-001</Card.Number>
                <Card.Title>Credit card feature</Card.Title>
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
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  );
}
