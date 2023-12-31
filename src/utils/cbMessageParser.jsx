import React from 'react';
const MessageParser = ({ children, actions }) => {
  // console.log(children);
  const parse = (message) => {
    console.log(message);
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
      actions.greet();
    }
    else if(lowerCaseMessage.includes('end'))
    {
      actions.endChat();
    }
    else
    {
      actions.wrongInput();
    }
  };
  return (
    <div>
      {' '}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { parse: parse, actions});
      })}{' '}
    </div>
  );
};
export default MessageParser;

