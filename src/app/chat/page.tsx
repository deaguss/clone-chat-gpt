"use client"

import { FC, Suspense } from 'react'
// import { fetchChatHistory } from '@/components/FormInput';
// import { useQuery } from 'react-query';
// import OutputMsg from '@/components/OutputMsg';


interface pageProps {}


const page: FC<pageProps> = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {

  // const { data: chatHistory, isLoading, isError } = useQuery<ChatMessage[]>('chatHistory', fetchChatHistory);

  // if (isError) {
  //   return <p>Error while fetching chat history.</p>;
  // }

  return (
    <div className={className} {...props}>
      <Suspense fallback={<p>Loading chat history...</p>}>
        {/* {chatHistory && <OutputMsg chatHistory={chatHistory} />} */}
      </Suspense>
    </div>
  );
};

export default page