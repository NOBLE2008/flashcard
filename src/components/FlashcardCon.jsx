import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "../App.css";
const FlashcardCon = () => {
  const [questions, setQuestions] = useState([
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
      reaveled: false,
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
      reaveled: false,
    },
    {
      id: 8832,
      question:
        "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
      reaveled: false,
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
      reaveled: false,
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
      reaveled: false,
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
      reaveled: false,
    },
  ]);

  const show = (id) => {
    return setQuestions((current) => {
        return current.map((item) => {
          return (id === item.id)
            ? {
                ...item,
                reaveled: !item.reaveled
            }
            : {
                ...item,
                reaveled: item.reaveled
            }
        });
      })
  }

  const reset = (id) => {
    return setQuestions((current) => {
        return current.map((item) => {
            return id !== item.id ?  {
                ...item,
                reaveled: false,
            }: {
                ...item,
                reaveled: item.reaveled,
            }
        })
    })
  }

  const reveal = (id) => {
    return () => {
      show(id)
      reset(id)
    };
  };

  const render = (item, index) => {
    return <Flashcard detail={item} key={index} id={item.id} reveal={reveal} />;
  };
  return <div className="flashcards">{questions.map(render)}</div>;
};

export default FlashcardCon;
