import React, { useEffect, useState } from "react";
import logo from "./img/sofa.svg";
import styled from "styled-components";
import Question from "./components/Question";
import runConfetti from "./confetti";
//TYPES
export interface AnswerObject {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
interface Category {
  id: number;
  name: string;
}
export interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: Difficulty;
  question: string;
  answers: string[];
  correct_answer: string;
  incorrect_answers: string[];
}

const ALL_QUESTIONS = 15;

//APP
export default function App() {
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestion] = useState<TriviaQuestion[]>([]);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [endQuiz, setEndQuiz] = useState(true);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState("");

  //FETCH DATA
  const fetchCategories = async () => {
    const url = `https://opentdb.com/api_category.php`;
    const data = await (await fetch(url)).json();
    setCategories(data.trivia_categories);
  };
  useEffect(() => {
    fetchCategories();
    if (userAnswer.length === ALL_QUESTIONS) {
      runConfetti();
    }
  }, [userAnswer.length]);

  const randomize = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.2);
  const fetchQuestions = async (
    amount: number,
    difficulty: Difficulty,
    category: string
  ) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;
    const data = await (await fetch(url)).json();
    return data.results.map((question: TriviaQuestion) => ({
      ...question,
      answers: randomize([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value as Difficulty);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const startQuiz = async () => {
    setLoading(true);
    setEndQuiz(false);
    const newQuestions = await fetchQuestions(
      ALL_QUESTIONS,
      difficulty,
      category
    );
    setQuestion(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setQuestionNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!endQuiz) {
      const answer = e.currentTarget.value;
      const correct = questions[questionNumber].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObject = {
        question: questions[questionNumber].question,
        answer,
        correct,
        correctAnswer: questions[questionNumber].correct_answer,
      };
      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = questionNumber + 1;
    if (nextQuestion === ALL_QUESTIONS) {
      setEndQuiz(true);
    } else {
      setQuestionNumber(questionNumber + 1);
    }
  };

  return (
    <div>
      <a href="/">
        <Img src={logo} alt="logo" />
      </a>
      {endQuiz ? <h3>Can you pass this quiz with a score of 15?</h3> : null}
      <Wrapper style={{ display: !endQuiz ? "block" : "none" }}>
        {!endQuiz ? <p className="score">Score: {score}</p> : null}
        {loading && <p>Loading questions...</p>}
        {!loading && !endQuiz && (
          <Question
            questionNr={questionNumber + 1}
            totalQuestions={ALL_QUESTIONS}
            category={questions[questionNumber].category}
            difficulty={questions[questionNumber].difficulty}
            question={questions[questionNumber].question}
            answers={questions[questionNumber].answers}
            userAnswer={userAnswer ? userAnswer[questionNumber] : undefined}
            callback={checkAnswer}
          />
        )}
        {!endQuiz &&
        !loading &&
        userAnswer.length === questionNumber + 1 &&
        questionNumber !== ALL_QUESTIONS - 1 ? (
          <NavButton className="next" onClick={nextQuestion}>
            Next
          </NavButton>
        ) : null}
      </Wrapper>
      {userAnswer.length === ALL_QUESTIONS ? ( //ALL_QUESTIONS
        <CenterMe>
          You finished the quiz with score {score}/15!🎉 You can start again for
          better results or for fun.
        </CenterMe>
      ) : null}
      {endQuiz || userAnswer.length === ALL_QUESTIONS ? (
        <Choose>
          <div>Before starting, choose category and difficulty:</div>
          <form>
            <select value={category} onChange={handleCategoryChange}>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </form>
        </Choose>
      ) : null}
      {endQuiz || userAnswer.length === ALL_QUESTIONS ? (
        <Choose>
          <form>
            <select value={difficulty} onChange={handleDifficultyChange}>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </form>
        </Choose>
      ) : null}
      {endQuiz || userAnswer.length === ALL_QUESTIONS ? (
        <NavButton className="start" onClick={startQuiz}>
          Start the quiz
        </NavButton>
      ) : null}
    </div>
  );
}

//STYLES
const Img = styled.img`
  width: 40px;
  margin-bottom: 5px;
`;
const Wrapper = styled.div`
  display: flex;
  background-color: #f4f4f4;
  border-radius: 20px;
  width: 80vw;
  min-height: 780px;
  height: max-content;
  padding: 2vh 5vw;
  box-shadow: 6px 8px 20px #888;
  display: none;
  .score {
    font-size: 2rem;
  }
`;
const CenterMe = styled.div`
  text-align: center;
  margin: 20px 0;
`;
const Choose = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  select {
    cursor: pointer;
    border: 0;
    width: 180px;
    height: 40px;
    border-radius: 10px;
    text-align: center;
    font-size: 1rem;
    margin-top: 5px;
  }
`;
const NavButton = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: #777;
  color: #fff;
  padding: 15px;
  border: 0;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 2px 2px 10px #444;
  :hover {
    background-color: #888;
  }
`;
