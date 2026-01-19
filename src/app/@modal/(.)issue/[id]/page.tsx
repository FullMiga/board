import { Modal } from "@/components/modal";
import { BackButton } from "./back-button";
import { DialogTitle } from "@radix-ui/react-dialog";
import IssueDetails from "@/app/issue/[id]/issue-details";

interface IssueModalProps {
  params: Promise<{ id: string }>;
}

export default async function IssueModal({ params }: IssueModalProps) {
  const { id } = await params;

  return (
    <Modal>
      <div className="flex flex-col gap-5 p-6">
        <BackButton />
        <DialogTitle className="sr-only">Issue details</DialogTitle>
        <IssueDetails issueId={id} />
      </div>
    </Modal>
  );
}
