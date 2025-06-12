'use client'

import * as React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Search } from "lucide-react"

interface Module {
  name: string
  logo: string
}

interface PremiumModulesCardProps {
  data: {
    modules: Module[]
    cost: number
  }
}

export function PremiumModulesCard({ data }: PremiumModulesCardProps) {
  return (
    <Card className="border border-border bg-gray-100/10 shadow-sm overflow-hidden rounded-xl">
      <CardHeader className="border-b border-border p-2 sm:p-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div className="space-y-2">
            <CardTitle className="text-lg font-semibold text-black">
              Premium Modules
            </CardTitle>
            <CardDescription className="text-sm text-gray-400">
              Changed your mind? No worries! You can still enable premium modules for this search. 
              Results will be shown in real time as they load.
            </CardDescription>
          </div>

          <Select defaultValue="en">
            <SelectTrigger className="w-[120px] bg-gray-900 border border-border text-gray-300">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 text-gray-400">
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="pt">Português</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <div className="flex flex-col md:flex-row">
        <CardContent className="flex-1 border-b md:border-b-0 md:border-r border-border p-2 sm:p-3">
          <h3 className="text-lg font-semibold text-black mb-2">
            Available Modules
          </h3>

<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-0.5 gap-y-1">
            {data.modules.map((module) => (
              <div key={module.name} className="flex flex-col items-center gap-1">
                <Avatar className="h-12 w-12 rounded-lg bg-gray-800">
                  <AvatarImage src={module.logo} alt={module.name} />
                  <AvatarFallback className="rounded-lg text-black">
                    {module.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs text-center text-black">
                  {module.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center justify-center p-4 sm:p-6 w-full md:w-64 bg-gray-900">
          <p className="text-sm font-semibold text-black mb-4 text-center">
            This search will cost <span className="text-purple-500">{data.cost} credits</span>
          </p>

          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" size="lg">
            <Search className="mr-2 h-4 w-4" />
            Run premium modules
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
