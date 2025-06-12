import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Search, Menu, MapPin } from "lucide-react"

export function SearchBar() {
  return (
    <div className="flex items-center rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 w-full max-w-md">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-r-none">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
          <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
          <DropdownMenuItem>Menu Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Input
        className="flex-1 border-0 shadow-none focus-visible:ring-0"
        placeholder="Search Google Maps"
        aria-label="Search Google Maps"
      />

      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none">
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>

      <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />

      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-l-none">
        <MapPin className="h-5 w-5" />
        <span className="sr-only">Directions</span>
      </Button>
    </div>
  )
}