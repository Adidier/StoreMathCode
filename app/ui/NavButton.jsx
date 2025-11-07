"use client";
import { useRouter } from "next/navigation";

export function NavButton({ route, children }) {
    const router = useRouter(); 
    return (
        <button
            onClick={() => {
                router.push(`${route}`)
            }}
            className="p-2 border rounded-r-xs border-gray-200"
        >
        {children}
        </button>
    )
}
