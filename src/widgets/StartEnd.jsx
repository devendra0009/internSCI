import React from 'react'

const StartEnd = (props) => {
  return (
    <div className='startEndContainer'>
      <button
          className="start-end-button"
          onClick={() => props.actionProvider.handleOk()}
        >
          Questions
        </button>
        <button
          className="start-end-button"
          onClick={() => props.actionProvider.endChat()}
        >
          End Chat
        </button>
    </div>
  )
}

export default StartEnd