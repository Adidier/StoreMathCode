"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export function SearchBar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleReturnKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() != "") {
      router.push(`/${searchTerm}`)
    }
  }

  return (
    <div className="flex flex-row w-1/4 justify-items-center">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleReturnKeyDown}
        className="border-l border-t border-b rounded-l-xs p-2 gap-2 border-gray-200 w-full outline-none" />
      <button
        onClick={() => {
          if (searchTerm.trim() != "") {
            router.push(`/${searchTerm}`)
          }
        }}
        className="p-2 border-r border-t border-b rounded-r-xs border-gray-200"
      >
        <Image src="/search-icon.svg" alt="search icon" width={20} height={20} />
      </button>
    </div>
  )
}