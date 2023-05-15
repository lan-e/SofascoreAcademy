import React from "react";
import { AnswerObject } from "../App";
import styled from "styled-components";

//TYPES
interface TriviaQuestion {
  questionNr: number;
  totalQuestions: number;
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  category: string;
  difficulty: string;
}
interface ButtonWrapperProps {
  correct: boolean;
  userClicked: boolean;
}

//QUESTION COMPONENT
const Question = ({
  questionNr,
  totalQuestions,
  question,
  answers,
  callback,
  userAnswer,
  category,
  difficulty,
}: TriviaQuestion) => {
  return (
    <div>
      <div id="question">
        Question: {questionNr}/{totalQuestions}
      </div>
      <div>Category: {category}</div>
      <div>Difficulty: {difficulty}</div>
      <h3 dangerouslySetInnerHTML={{ __html: question }}></h3>
      {/* <h3>{question}</h3> */}
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            {userAnswer?.correctAnswer === answer && <span>✅</span>}
            {userAnswer &&
              !userAnswer.correct &&
              userAnswer.answer === answer && <span>❌</span>}
          </button>
        </ButtonWrapper>
      ))}
    </div>
  );
};
export default Question;

//STYLES
const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 0.8;
  }
  button {
    font-size: 1rem;
    color: #fff;
    background-color: #374df5;
    width: 40vw;
    height: 40px;
    min-height: 60px;
    margin: 5px 0;
    cursor: pointer;
    border: 0;
    box-shadow: 2px 2px 10px #aaa;
    border-radius: 10px;
  }
`;
