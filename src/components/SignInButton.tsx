"use client"

import React from 'react'
import { signIn } from "next-auth/react"
type Props = { text: string }

const SignInButton = ({ text }: Props) => {
  return (
    <div>
        <button onClick={() => {
            signIn("google").catch(console.error)
        }} className="flex items-center p-2 text-white transition duration-75 w-full rounded-lg hover:bg-gray-700/50 group">
            <div className="flex">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>
            </div>
        </button>
    </div>
  )
}

export default SignInButton