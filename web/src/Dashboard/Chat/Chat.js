import React from 'react';
const ChatLogo = () => {
  return (
    <div className="chat_gpt_logo_container">
      <p className="chat_gpt_logo">ChatGPT</p>
    </div>
  );
};
const Chat = () => {
  return (
    <div className="chat_container">
      <ChatLogo />
    </div>
  );
};

export default Chat;
