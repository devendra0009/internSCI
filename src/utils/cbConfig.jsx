import { createChatBotMessage } from 'react-chatbot-kit';
import OkBtn from '../widgets/OkBtn';
import ActionProvider from './cbActionProvider';
import BotAvatar from '../assets/BotAvatar';
import UserAvatar from '../assets/UserAvatar';
import Questions from '../widgets/Questions';
import StartEnd from '../widgets/StartEnd';

const config = {
  botName:"SciAstra Bot",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to SciAstra!`, {
      widget: 'okBtn',
    }),
  ],
  widgets: [
    {
      widgetName: 'okBtn',
      widgetFunc: (props) => <OkBtn {...props} />,
    },
    {
      widgetName: "questions",
      widgetFunc: (props) => <Questions {...props} />,
    },
    {
      widgetName: "startend",
      widgetFunc: (props) => <StartEnd {...props} />,
    }
  ],
  customComponents: {
    botAvatar:(props)=><BotAvatar {...props}/>,
    userAvatar:(props)=><UserAvatar {...props}/>
  },
};

export default config;