import SideBar from '@/components/SideBar'
import Providers from '@/components/Providers'
import type { Metadata } from 'next'
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation"
import FormInput from '@/components/FormInput';

export const metadata: Metadata = {
  title: 'chat',
  description: 'Generated chat',
}

export default async function Template(
    { children }: { children: React.ReactNode }
    ) {
    const session = await getAuthSession();
    if(!session?.user){
        redirect("/")
    }
    return ( 
    <Providers>
    <div className="flex dark:bg-[#343541] antialiased min-h-screen">
        <div className="w-1/4">
        <SideBar />
        </div>
        <div className="h-3/4 px-44 py-5">
            <div className="flex flex-col">
                <div className='px-2'>
                    {children}
                </div>
                <div className="relative mt-10">
                    <div className="fixed w-[60%] bottom-0 bg-white dark:bg-[#343541]">
                        <FormInput />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Providers>

    )
  }