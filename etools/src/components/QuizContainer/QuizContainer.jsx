import React, { useState } from 'react';
import axios from 'axios';
import QImg from './../../assets/quiz.jpg';
import './quizcontainer.css';

function QuizContainer() {
  const [difficulty, setDifficulty] = useState("easy");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [id,setID] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState({});

const handleAnswerChange = (event, questionId) => {
  setSelectedAnswers(prevSelectedAnswers => ({
    ...prevSelectedAnswers,
    [questionId]: event.target.value,
  }));
};


  const storedUserId = localStorage.getItem('userid');

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  // const handleAnswerChange = (event, questionId) => {
  //   setAnswers(prevAnswers => {
  //     const newAnswers = { ...prevAnswers };
  //     newAnswers[questionId] = event.target.value;
  //     return newAnswers;
  //   });
  // };
  

  const handleSubmit = () => {
    axios.post('http://localhost:8000/quiz/', { difficulty: difficulty })
      .then(response => {
        console.log(response);
        setQuestions(response.data);
        setAnswers({});
        setScore(null);
        setIncorrectAnswers([]);
		setID(storedUserId);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const calculateScore = () => {
    let totalScore = 0;
    const incorrect = [];
    questions.forEach((question) => {
      if (question.correct_option === answers[question.id]) {
        totalScore++;
      } else {
        incorrect.push(question);
      }
    });
    setIncorrectAnswers(incorrect);
    return totalScore;
  };

  const handleScore = (event) => {
    event.preventDefault();
    const totalScore = calculateScore();
    setScore(totalScore);
    const incorrectAnswersData = incorrectAnswers.map((question) => {
      return { question: question.question_text, answer: answers[question.id] };
    });
    const data = {
      user: id,
      score: totalScore,
      incorrect_answers: incorrectAnswersData,
    };
    axios.post('http://localhost:8000/quiz/submit/', data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="q-container">
        <img className='qbg-img' src={QImg} alt="background" />
        <div className="qimg-shadow"></div>
        <h1>Quiz</h1>
      </div>
      <div className='q-main'>
        {questions.length !== 0 ? (
          score !== null ? (
            <div className='q-output'>
              <p>Your score is {score}.</p>
              <p>You got {incorrectAnswers.length} question(s) wrong:</p>
              <ul>
                {incorrectAnswers.map((question) => (
                  <li key={question.id}>
                    {question.question_text} - Your answer: {answers[question.id]}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <form className='q-form' onSubmit={handleScore}>
              {questions.map((question) => (
                <div key={question.id}>
                  <h3>{question.question_text}</h3>
                  <label>
				            <input
                      type="radio"
                      name={'question-${question.id}-${index}'}
                      value={question.option_1}
                      checked={selectedAnswers[question.id] === question.option_1}
                      onChange={(event) => handleAnswerChange(event, question.id)}
                    />
                    {question.option_1}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={'question-${question.id}-${index}'}
                      value={question.option_2}
                      checked={selectedAnswers[question.id] === question.option_2}
                      onChange={(event) => handleAnswerChange(event, question.id)}
                    />
                    {question.option_2}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={'question-${question.id}-${index}'}
                      value={question.option_3}
                      checked={selectedAnswers[question.id] === question.option_3}
                      onChange={(event) => handleAnswerChange(event, question.id)}
                    />
                    {question.option_3}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={'question-${question.id}-${index}'}
                      value={question.option_4}
                      checked={selectedAnswers[question.id] === question.option_4}
                      onChange={(event) => handleAnswerChange(event, question.id)}
                    />
                    {question.option_4}
                  </label>
                </div>
              ))}
              <button className='q-button' type="submit">Submit Answers</button>
            </form>
          )
      ):(
        <>
          <div className='q-cont'>
            <label>
              Difficulty:
              <select className='q-select' value={difficulty} onChange={handleDifficultyChange}>
                <option value="easy">Easy</option>
                <option value="hard">Hard</option>
              </select>
            </label>
          </div>
          <button className='q-button' type="button" onClick={handleSubmit}>
            Start Quiz
          </button>
        </>
      )}
    </div>
  </>
);
}

export default QuizContainer;