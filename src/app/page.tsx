"use client"

import { Bot } from "lucide-react"
import { Button } from "@/components/ui/ui/button"
import { signIn } from "next-auth/react"
export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 mt-52">
      <div className="">
        <Bot size={48}/>
      </div>
      <div className="flex gap-2 flex-col">
        <h5 className="text-sm">Welcome to Chat Gpt</h5>
        <h5 className="text-sm">Log in With your Open AI to continue</h5>
      </div>
      <div className="mt-2">
        <Button variant="destructive" className="bg-green-500 hover:bg-green-700" onClick={() => signIn("google", {
        redirect: true,
      }).catch(console.error)}>login</Button>
      </div>
    </div>
  )
}
