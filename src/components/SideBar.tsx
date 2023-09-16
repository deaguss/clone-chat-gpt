import Link from "next/link";
import SideBarUser from "@/components/SideBarUser";
import { getAuthSession } from "@/lib/nextauth";
import SignInButton from "./SignInButton";
import { PlusIcon, BoxIcon, ChatBubbleIcon, TrashIcon } from '@radix-ui/react-icons'

const SideBar = async () => {
  const session = await getAuthSession();
  return (
    <div className="relative max-h-full">
        <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#202123]">
            <ul className="space-y-2 font-medium">
                <li>
                    <div className="flex gap-5">
                        <button className="flex items-center py-2 outline outline-1 px-8 text-white outline-gray-400/50  outline-offset-2 hover:bg-gray-500/50 gap-2 rounded text-left"><PlusIcon/>New Chat</button>
                        <div className="group flex">
                            <button className="flex items-center py-2 outline outline-1 px-4 text-white outline-gray-400/50  outline-offset-2 gap-2 hover:bg-gray-500/50 rounded text-left">
                                <BoxIcon />
                            </button>
                            <div className="hidden absolute text-white p-2 bg-gray-900 -right-28 rounded group-hover:flex text-sm">Close sidebar</div>
                            <div className="hidden absolute group-hover:flex -right-2 top-6 w-0 h-0 
                            border-t-[9px] border-t-transparent
                            border-r-[14px] border-r-gray-900
                            border-b-[9px] border-b-transparent">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="pt-4 mt-4 space-y-2 font-medium">
                <li className="relative group">
                    <button className="flex items-center py-2 text-white px-3  outline-offset-2 gap-4 group-hover:bg-gray-500/50 rounded text-left w-full text-sm"><ChatBubbleIcon className="text-lg"/>riwayat</button>
                    <button className="absolute right-2 top-1.5 p-1 text-gray-200 group-hover hover:text-red-500 text-xl"><TrashIcon /></button>
                </li>
            </ul>
            <ul className="pt-4 absolute bottom-0 mt-4 space-y-2 font-medium border-t border-gray-200 w-[90%] py-4">
                <li>
                    <Link href="#" className="flex items-center p-2 text-white transition duration-75 rounded-lg hover:bg-gray-700/50  group">
                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                        <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
                    </svg>
                    <span className="ml-2 text-sm">Upgrade to Pro</span>
                    <span className="bg-yellow-500 ml-10 text-gray-900 text-sm rounded p-1 group-hover:bg-yellow-600">NEW</span>
                    </Link>
                </li>
                {session?.user ? (
                    <SideBarUser user={session.user}/>
                ) : (
                    <li><SignInButton text={"Sign In"}/></li>
                )}
            </ul>
        </div>
        </aside>
            <div className="p-4 sm:ml-64">
        </div>
    </div> 
  );
};

export default SideBar;
