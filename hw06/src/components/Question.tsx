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
      <QuestionInfo>
        <div id="question">
          Question: {questionNr}/{totalQuestions}
        </div>
        <div>{category}</div>
        <div>Difficulty: {difficulty}</div>
      </QuestionInfo>
      <QuestionStyle>
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
      </QuestionStyle>
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
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  );
};
export default Question;

//STYLES
const QuestionInfo = styled.div`
  height: 80px;
`;
const QuestionStyle = styled.h3`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  justify-content: center;
  :hover {
    opacity: 0.8;
  }
  button {
    font-size: 1rem;
    color: #fff;
    background: ${({ correct, userClicked }) =>
      correct ? "#0d8b0d" : !correct && userClicked ? "#c02121" : "#374df5"};
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
