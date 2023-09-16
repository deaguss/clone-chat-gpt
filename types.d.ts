interface ChatMessage {
    user: string;
    message: string;
}
  
interface ChatHistory {
    chatHistory: ChatMessage[];
}
