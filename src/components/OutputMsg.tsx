import React from 'react'

type Props = {}

type ChatMessage = {
    user: string;
    message: string;
  }
  
  interface OutputMsgProps {
    chatHistory: ChatMessage[];
  }
  
  function OutputMsg({ chatHistory }: OutputMsgProps) {
    return (
      <div>
        {chatHistory.map((message, index) => (
          <div key={index}>
            <p>User: {message.user}</p>
            <p>Message: {message.message}</p>
          </div>
        ))}
      </div>
    );
  }
  

export default OutputMsg