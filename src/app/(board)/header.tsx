"use client";
import { Loader2Icon, LogInIcon, SearchIcon } from "lucide-react";
import { debounce, parseAsString, useQueryState } from "nuqs";
import type { ChangeEvent } from "react";
import { Input } from "@/components/input";
import { authClient } from "@/lib/auth-client";

export function Header() {
  const { data: session, isPending } = authClient.useSession();
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""));

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== "" ? debounce(500) : undefined,
    });
  };

  async function handleSignIn() {
    await authClient.signIn.social({ provider: "github", callbackURL: "/" });
  }

  async function handleSignOut() {
    await authClient.signOut();
  }

  return (
    <header className="max-w-225 mx-auto w-full flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="font-semibold text-xl">Product Roadmap</h1>
        <p className="text-sm text-navy-100">
          Follow the development progress of our entire platform
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon
            size={16}
            className="absolute text-navy-200 left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <Input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search for features..."
            className="w-67.5 pl-8"
          />
        </div>

        {isPending ? (
          <div className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center">
            <Loader2Icon size={14} className="text-navy-200 animate-spin" />
          </div>
        ) : session?.user ? (
          <button
            type="button"
            onClick={handleSignOut}
            className="size-8 rounded-full overflow-hidden cursor-pointer"
          >
            <img
              src={session.user.image ?? ""}
              alt={session.user.name}
              className="size-8 rounded-full"
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSignIn}
            className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center hover:bg-navy-600 transition-colors duration-200 cursor-pointer"
          >
            <LogInIcon size={14} className="text-navy-200" />
          </button>
        )}
      </div>
    </header>
  );
}
