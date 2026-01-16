"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, MessageCirclePlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Input } from "@/components/input";
import { authClient } from "@/lib/auth-client";

const createCommentSchema = z.object({
  text: z.string().min(2, "Comment must be at least 2 characters!"),
});

type CreateCommentFormData = z.infer<typeof createCommentSchema>;

interface IssueCommentFormProps {
  onCreateComment: (text: string) => Promise<void>;
}

export function IssueCommentForm({ onCreateComment }: IssueCommentFormProps) {
  const { data: session } = authClient.useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateCommentFormData>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: {
      text: "",
    },
  });

  async function handleCreateComment(data: CreateCommentFormData) {
    await onCreateComment(data.text);
    reset();
  }

  const isAuthenticated = !!session?.user;

  return (
    <form
      onSubmit={handleSubmit(handleCreateComment)}
      className="relative w-full"
    >
      <Input
        {...register("text")}
        className="bg-navy-900 h-11 pr-24 w-full"
        placeholder={
          !isAuthenticated ? "Sign in to comment..." : "Leave a comment..."
        }
        disabled={isSubmitting || !isAuthenticated}
      />

      {errors.text && (
        <span className="text-sm text-red-400 mt-1">{errors.text.message}</span>
      )}
      <button
        type="submit"
        disabled={isSubmitting || !isAuthenticated}
        className="flex items-center gap-2 text-indigo-400 absolute right-3 top-1/2 -translate-y-1/2 text-sm hover:text-indigo-300 cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? "Publishing..." : "Publish"}
        {isSubmitting ? (
          <Loader2Icon size={14} className="animate-spin" />
        ) : (
          <MessageCirclePlusIcon size={14} />
        )}
      </button>
    </form>
  );
}
