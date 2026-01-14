"use client";
import { SearchIcon } from "lucide-react";
import { debounce, parseAsString, useQueryState } from "nuqs";
import type { ChangeEvent } from "react";
import { Input } from "@/components/input";

export function SearchInput() {
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""));

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== "" ? debounce(500) : undefined,
    });
  };

  return (
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
  );
}
