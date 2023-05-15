import React, { useEffect, useState } from "react";
import logo from "./img/sofa.svg";
import styled from "styled-components";
import Question from "./components/Question";

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
  }, []);

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
      {endQuiz ? <h3>Can you pass this quiz with score 15?</h3> : null}

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
          <SecondButton className="next" onClick={nextQuestion}>
            Next
          </SecondButton>
        ) : null}
      </Wrapper>

      {userAnswer.length === ALL_QUESTIONS ? ( //ALL_QUESTIONS
        <CenterMe>
          Congrats! You finished the quiz.🎉🎉🎉 You can start again for better
          results or for fun.
        </CenterMe>
      ) : null}
      {endQuiz || userAnswer.length === ALL_QUESTIONS ? (
        <Choose>
          <div>Before start, please choose difficulty:</div>
          <div>
            <form>
              <select value={difficulty} onChange={handleDifficultyChange}>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
              </select>
            </form>
          </div>
        </Choose>
      ) : null}
      {endQuiz || userAnswer.length === ALL_QUESTIONS ? (
        <Choose>
          <div>and category</div>
          <div>
            <form>
              <select value={category} onChange={handleCategoryChange}>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </Choose>
      ) : null}
      {endQuiz || userAnswer.length === ALL_QUESTIONS ? (
        <SecondButton className="start" onClick={startQuiz}>
          Start the quiz
        </SecondButton>
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
  min-height: 650px;
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
  padding: 10px;
`;
const Choose = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  select {
    cursor: pointer;
    border: 0;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    text-align: center;
    font-size: 1rem;
    margin-top: 5px;
  }
`;
const SecondButton = styled.button`
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
