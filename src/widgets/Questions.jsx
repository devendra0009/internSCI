import React from 'react'

const Questions = (props) => {
    const questions = [
        {
          text: `SciAstra's Mission`,
          id: 1,
        },
        {
          text: `SciAstra origin and its Inspiration`,
          id: 2,
        },
        {
          text: `When did it start?`,
          id: 3,
        },
        {
          text: `Mentors at SciAstra and their backgrounds?`,
          id: 4,
        },
        {
          text: `Institutes guided by SciAstra?`,
          id: 5,
        },
        {
          text: `Research entrance exams supported by SciAstra?`,
          id: 6,
        },
        {
          text: `Students mentored and community size?`,
          id: 7,
        },
        {
          text: `SciAstra's approach to exam preparation?`,
          id: 8,
        },
        {
          text: `SciAstra's stance on rote memorization?`,
          id: 9,
        },
        {
          text: `Student benefits from SciAstra's approach?`,
          id: 10,
        },
      ];
    const allQuestions = questions.map((ques) => (
        <button
          className="question-option-button"
          key={ques.id}
          onClick={() => props.actionProvider.handleQuestions(ques.text)}
        >
          {ques.text}
        </button>
      ));
  return (
    <div className='allQuestions'>{allQuestions}</div>
  )
}

export default Questions