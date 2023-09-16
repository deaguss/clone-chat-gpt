"use client"

import React, { useState, SyntheticEvent } from 'react'
import { SendHorizonal } from "lucide-react"
import { useMutation } from 'react-query'
import axios from 'axios'

// export const fetchChatHistory = async () => {
//   try {
//     const response = await axios.get('/api/chat');
//     console.log(response.data)
//     return response.data;
//   } catch (error) {
//     console.log(error)
//   }
// };


const FormInput = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const [message, setMessage] = useState<string>('')

  const sendMsgMutation = useMutation(async(newMessage) => {
    try {
      const response = await axios.post('/api/chat', { message: newMessage })
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  })

  const handleSubmit = async(e: SyntheticEvent) => {
    e.preventDefault()
    if(message !== ''){
      await sendMsgMutation.mutateAsync()
      setMessage('')
    }
  }

  return (
    <div className={className} {...props}>
        <form onSubmit={handleSubmit}>
        <div className="mb-8 relative">
            <input type="text" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder='Send a message' 
            className="border text-gray-900 text-sm rounded-xl block w-full p-2.5 py-4 dark:bg-[#40414F] dark:border-gray-600 dark:text-white outline-none shadow-md" required />
            <button type='submit' className='absolute group right-5 top-4'>
                <SendHorizonal size={22} strokeWidth={2.5}/>
                <div className="hidden absolute text-white p-2 w-20 bg-gray-900 -right-10 rounded group-hover:flex text-xs -bottom-14"><p className='break-normal'>Send msg</p></div>
                <div className="hidden absolute group-hover:flex -right-2 top-9 w-0 h-0 
                border-l-[9px] border-l-transparent
                border-b-[14px] border-b-gray-900
                border-r-[9px] border-r-transparent">
                </div>
            </button>
            <p className='text-xs flex items-center justify-center mt-3'>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 3 Version</p>
        </div>
        </form>
    </div>
  )
}

export default FormInput