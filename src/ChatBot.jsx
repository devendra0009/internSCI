import React from 'react';
import Chatbot from 'react-chatbot-kit';
import config from './utils/cbConfig';
import ActionProvider from './utils/cbActionProvider';
import MessageParser from './utils/cbMessageParser';
import 'react-chatbot-kit/build/main.css';

const ChatBot = () => {
  return (
    <div className="chat-bot">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
};

export default ChatBot;
