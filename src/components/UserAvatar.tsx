"use client"

import React from 'react'
import { User } from 'next-auth'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import Image from 'next/image'

type Props = {
    user: Pick<User, "image" | "name">
}

function UserAvatar({ user }: Props) {
  return (
    <Avatar>
        {user && user.image ? (
            <div className="">
                <Image fill src={user.image} alt='' className="max-w-[30px] rounded" referrerPolicy='no-referrer'/>
            </div>
        ): (
            <AvatarFallback>
                <span className='sr-only'>{user?.name}</span>
            </AvatarFallback>
        )}
    </Avatar>
  )
}

export default UserAvatar