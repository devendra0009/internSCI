import React from 'react'
import { useChatBot } from 'react-chatbot-kit';

const OkBtn = (props) => {
    
  return (
    <button onClick={props.actionProvider.handleOk} className='ok-btn'>Got it</button>
  )
}

export default OkBtn