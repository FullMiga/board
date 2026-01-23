"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface ModalProps extends Dialog.DialogContentProps {
  open: boolean;
}

export function Modal({ open, className, ...props }: ModalProps) {
  const router = useRouter();

  function handleOpenChange(open: boolean) {
    if (!open) {
      router.back();
    }
  }

  return (
    <Dialog.Root defaultOpen onOpenChange={handleOpenChange} open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
        <Dialog.Content
          {...props}
          className={twMerge(
            "fixed right-0 top-0 h-full w-full max-w-135 bg-navy-950 border-l border-navy-700 z-60 overflow-y-auto",
            className,
          )}
        />
      </Dialog.Portal>
    </Dialog.Root>
  );
}
