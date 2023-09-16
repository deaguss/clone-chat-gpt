"use client"

import React from 'react'
import { User } from 'next-auth';
import UserAvatar from '@/components/UserAvatar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ExitIcon, TrashIcon } from '@radix-ui/react-icons';
import { signOut } from "next-auth/react"

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/ui/dropdown-menu"

type Props = {
  user: Pick<User, "name" | "image" | "email">;
};

const SideBarUser = ({ user }: Props) => {
  return (
    <div>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <button className="flex items-center p-2 text-white transition duration-75 w-full rounded-lg hover:bg-gray-700/50 group outline-none">
            <div className="relative">
              <div className="ml-10">
                <UserAvatar user={user}/>
              </div>
              <span className="flex-1 ml-10 text-normal text-sm whitespace-nowrap">{user.email}</span>
            </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black text-white border-none">
      <DropdownMenuItem><ThemeToggle/></DropdownMenuItem>
      <DropdownMenuItem className='flex gap-2'><TrashIcon />Clear history</DropdownMenuItem>
      <DropdownMenuSeparator className='bg-opacity-50 bg-gray-600'/>
      <DropdownMenuItem className='flex gap-2' onSelect={(e) => {
        e.preventDefault();
        signOut().catch(console.error)
      }}><ExitIcon />Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default SideBarUser