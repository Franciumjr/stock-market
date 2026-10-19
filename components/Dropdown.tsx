'use client'

import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { LogOut } from 'lucide-react'
import NavItems from './NavItems'

const Dropdown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push("/sign-in");
  }

  const user = {
    name: "Magnus",
    email: "magnus@gmail.com"
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-700/50 cursor-pointer p-1.5 rounded-lg transition-colors outline-none">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt={user.name} />
            <AvatarFallback className="bg-yellow-500 text-gray-950 text-xs font-bold">{initials}</AvatarFallback>
            <AvatarBadge className="bg-teal-400" />
          </Avatar>
          <div className="hidden md:flex flex-col text-left font-medium text-gray-300 text-sm">
            {user.name}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-800 border-gray-700 text-gray-300 w-56">
          <DropdownMenuGroup>
            <DropdownMenuLabel>
              <div className='flex items-center gap-3 py-1'>
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt={user.name} />
                  <AvatarFallback className="bg-yellow-500 text-gray-950 text-sm font-bold">{initials}</AvatarFallback>
                  <AvatarBadge className="bg-teal-400" />
                </Avatar>
                <div className="flex flex-col">
                  <span className='text-sm font-semibold text-gray-100'>
                    {user.name}
                  </span>
                  <span className='text-xs text-gray-400'>
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem className="text-red-400 hover:bg-red-500/15 focus:bg-red-500/15 transition-colors cursor-pointer flex items-center gap-2" onClick={handleSignOut}>
              <LogOut className="h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-700 sm:hidden" />
            <nav className='sm:hidden pt-1'>
              <NavItems />
            </nav>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Dropdown