'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
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

  return (
    <div >
        <DropdownMenu>
    <DropdownMenuTrigger >
        <Button variant="ghost" className="flex items-center text-white hover:text-violet-800">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="bg-violet-600 text-sm font-bold">{user.name.match(/(^\S\S?|\s\S)?/g).map(v=>v.trim()).join("").match(/(^\S|\S$)?/g).join("").toLocaleUpperCase()}</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
            <div className="hidden md:flex flex-col font-medium text-zinc-400">
              {user.name}
            </div>
    </Button>
    </DropdownMenuTrigger >
    <DropdownMenuContent className="text-gray-400">
        <DropdownMenuGroup>
        <DropdownMenuLabel>
        <div className='flex relative items-center gap-3 py-2'>
          <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="bg-violet-600 text-sm font-bold">{user.name.match(/(^\S\S?|\s\S)?/g).map(v=>v.trim()).join("").match(/(^\S|\S$)?/g).join("").toLocaleUpperCase()}</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
        <div className="flex flex-col">
        <span className='text-sm'>
          {user.name}
        </span>
        <span className='text-sm'>
          {user.email}
        </span>
       </div>
      </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator></DropdownMenuSeparator>
      <DropdownMenuItem className="text-gray-100 text-md font-medium focus:bg-red-500  transition-colors cursor-pointer" onClick={handleSignOut}>
      <DropdownMenuSeparator></DropdownMenuSeparator>
      <LogOut></LogOut>
      Sign Out
      </DropdownMenuItem>
      <DropdownMenuSeparator></DropdownMenuSeparator>
      <nav className='sm:hidden'>
        <NavItems></NavItems>
      </nav>
    </DropdownMenuGroup>
    </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default Dropdown