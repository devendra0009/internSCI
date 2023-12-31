import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const greet = () => {
    const greetingMessage = createChatBotMessage('Hi, friend.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, greetingMessage],
    }));
  };
  const handleOk = () => {
    const okMessage = createClientMessage('Got it');
    const questionsMessage = createChatBotMessage('Select A Question!', {
      widget: 'questions',
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, okMessage, questionsMessage],
    }));
  };

  const handleQuestions = (ques) => {
    console.log(ques);
    let ansMsg, quesMsg;
    if (ques === `SciAstra's Mission`) {
      quesMsg = createClientMessage(ques);
      ansMsg = createChatBotMessage(
        `SciAstra's mission is to go beyond exam qualifications and foster critical thinking in students, guiding them to think like scientists.`,
        {
          widget: 'startend',
        }
      );
    } else if (ques === `SciAstra origin and its Inspiration`) {
      quesMsg = createClientMessage(ques);
      ansMsg = createChatBotMessage(
        `SciAstra started from a hostel room and a small YouTube channel in March 2021. It was inspired by the belief that education should extend beyond competitive exams.`,
        {
          widget: 'startend',
        }
      );
    } else if (ques === `When did it start?`) {
      quesMsg = createClientMessage(ques);
      ansMsg = createChatBotMessage(`In March 2021.`, {
        widget: 'startend',
      });
    } else if (ques === `Mentors at SciAstra and their backgrounds?`) {
      quesMsg = createClientMessage(ques);
      ansMsg = createChatBotMessage(
        `SciAstra boasts over 60 mentors from premier research institutes worldwide, including Harvard, Oxford, Max Planck, IISc, and IISERs.`,
        {
          widget: 'startend',
        }
      );
    } else if (ques === `Institutes guided by SciAstra?`) {
      quesMsg = createClientMessage(ques);
      ansMsg = createChatBotMessage(
        `SciAstra provides comprehensive guidance for institutes like IISERs, NISER, IISc Bangalore, ISI, CMI, and others.`,
        {
          widget: 'startend',
        }
      );
    } else if (ques === `Research entrance exams supported by SciAstra?`) {
      quesMsg = createClientMessage(ques);
      ansMsg = createChatBotMessage(
        `SciAstra assists students in preparing for research entrance exams like IAT, NEST, ISI, CMI, IACS, and more.`,
        {
          widget: 'startend',
        }
      );
    } else if (ques === `Students mentored and community size?`) {
      quesMsg = createClientMessage(ques);
      ansMsg = createChatBotMessage(
        `SciAstra has mentored over 10,000 students through its courses and has an active community of over 1,00,000 dedicated students.`,
        {
          widget: 'startend',
        }
      );
    } else if (ques === `SciAstra's approach to exam preparation?`) {
      quesMsg = createClientMessage(ques);
      ansMsg = createChatBotMessage(
        `SciAstra adopts a strategic approach to exam preparation, combining in-depth subject knowledge with critical thinking skills.`,
        {
          widget: 'startend',
        }
      );
    } else if (ques === `SciAstra's stance on rote memorization?`) {
      quesMsg = createClientMessage(ques);
      ansMsg = createChatBotMessage(
        `SciAstra believes in moving beyond rote memorization to promote a deeper understanding of concepts and the development of analytical skills.`,
        {
          widget: 'startend',
        }
      );
    } else if (ques === `Student benefits from SciAstra's approach?`) {
      quesMsg = createClientMessage(ques);
      ansMsg = createChatBotMessage(
        `Students benefit by developing a scientific mindset, honing critical thinking skills, and gaining a comprehensive understanding of their subjects for lifelong success.`,
        {
          widget: 'startend',
        }
      );
    }
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, quesMsg, ansMsg],
    }));
  };
  const endChat = () => {
    const endMsg = createChatBotMessage(`Chat Ended!!`);
    setState((prev) => ({
      ...prev,
      messages: [endMsg],
    }));
  };

  const wrongInput = () => {
    const wrongMsg = createChatBotMessage(`Wrong Input!!`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, wrongMsg],
    }));
  };

  return (
    <div>
      {' '}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            greet,
            handleOk,
            handleQuestions,
            wrongInput,
            endChat,
          },
        });
      })}{' '}
    </div>
  );
};
export default ActionProvider;
