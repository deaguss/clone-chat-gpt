import { getAuthSession } from "@/lib/nextauth"
import { NextResponse } from "next/server";
import { OpenAIApi, Configuration } from "openai";

const apiKey = process.env.SECRET_KEY_GPT as string;
const MAX_CHAT_HISTORY_LENGTH = 50;
const configuration = new Configuration({ apiKey: apiKey });
const openai = new OpenAIApi(configuration);

// export async function GET(
//   req: Request, res: Response
//     ) {
//     try {
//         const session = await getAuthSession();
//         if(!session?.user){
//             return NextResponse.json(
//                 { error: "You must be logged in to create a chat!" },
//                 {
//                   status: 401,
//                 }
//               );
//         }
//           const chatHistory: ChatHistory = JSON.parse(localStorage.getItem('chatHistory') || '{"chatHistory": []}');
//           return NextResponse.json({ chatHistory }, { status: 200})
//     } catch (error) {
//         return NextResponse.json(
//             { error: error },
//             {
//               status: 500,
//             }
//           );
//     }
// }

export async function POST(
    req: Request, res: Response
    ) {
    try {
        const session = await getAuthSession();
        if(!session?.user){
            return NextResponse.json(
                { error: "You must be logged in to create a chat!" },
                {
                  status: 401,
                }
              );
        }
          const { message } = await req.json();
          console.log(message)
      
          const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: message,
            max_tokens: 2048,
            temperature: 0.2,
            stop: null,
          })
      
          const botReplay = response.data.choices[0].text || "";
          const userName = session.user?.name || "Unknown User";

          const newChatMessage: ChatMessage = {
            user: userName,
            message: botReplay,
          };

          const msg: ChatHistory = JSON.parse(localStorage.getItem('chatHistory') || '{"chatHistory": []}')
          msg.chatHistory.push(newChatMessage);

          if (msg.chatHistory.length > MAX_CHAT_HISTORY_LENGTH) {
            msg.chatHistory.shift();
          }
          localStorage.setItem('chatHistory', JSON.stringify(msg))
          return NextResponse.json({ newChatMessage }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: error },
            {
              status: 500,
            }
          );
    }
}