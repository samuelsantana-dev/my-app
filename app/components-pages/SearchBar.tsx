import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, AlignStartHorizontalIcon } from "lucide-react"

export function SearchBar() {
  return (
        <div
        className="flex items-center rounded-xl border border-gray-200 bg-gray-100 dark:bg-gray-800 shadow-md dark:border-gray-700 w-full max-w-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-400 hover:shadow-lg"
      >

      <Input
        className="flex-1 border-0 shadow-none focus-visible:ring-0"
        placeholder="Search"
        aria-label="Search"
      />

      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none">
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>

      <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />

      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-l-none">
        <AlignStartHorizontalIcon />
        <span className="sr-only">Directions</span>
      </Button>
    </div>

  )
}