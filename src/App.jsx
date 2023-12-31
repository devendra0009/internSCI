// import { Link } from 'react-router-dom'
import './App.css';
import ChatBot from './ChatBot';
import BotAvatar from './assets/BotAvatar';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const handleBot = () => {
    setOpen(!open);
  };

  return (
    <>
      <h1 className="heading">SciAstra Home Page</h1>
      <div className="botContainer">
        {open && (
          <>
            <ChatBot />
          </>
        )}
        <button className="chat-btn" onClick={handleBot}>
          <BotAvatar />
        </button>
      </div>
    </>
  );
}

export default App;
