import React, { useState } from 'react';
import axios from 'axios';
import QImg from './../../assets/quiz.jpg';
import './quizcontainer.css';

function QuizContainer() {
	const [difficulty, setDifficulty] = useState("easy");
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState({});
	const [score, setScore] = useState(null);
  
	const handleDifficultyChange = (event) => {
	  setDifficulty(event.target.value);
	};
  
	const handleAnswerChange = (event, questionId) => {
	  const newAnswers = { ...answers };
	  newAnswers[questionId] = event.target.value;
	  setAnswers(newAnswers);
	};
  
	const handleSubmit = () => {
    	axios.post('http://localhost:8000/quiz/', { difficulty: difficulty })/*this is where the python file will be linked*/
      	.then(response => {
    		setQuestions(response.data);
      	})
    	.catch(error => {
    		console.error(error);
      	});
  	};
	// const handleSubmit = async (event) => {
	//   event.preventDefault();
	//   const response = await fetch(`/api/quiz/${difficulty}`);
	//   const data = await response.json();
	//   setQuestions(data);
	// };
  
	const calculateScore = () => {
	  let totalScore = 0;
	  questions.forEach((question) => {
		if (question.correct_option === answers[question.id]) {
		  totalScore++;
		}
	  });
	  return totalScore;
	};
  
	const handleScore = (event) => {
	  event.preventDefault();
	  const totalScore = calculateScore();
	  setScore(totalScore);
	};
  
  return (
	<>
		<div className="q-container">
			<img className='qbg-img' src={QImg} alt="background" />
			<div className="qimg-shadow"></div>
			<h1>Quiz</h1>
		</div>
		<div className='q-main'>
			{questions.length!==0 ?(
				score !== null ? (
						<div className='q-output'>Your score is {score}</div>
					) : (
						<form className='q-form' onSubmit={handleScore}>
						{questions.map((question) => (
							<div key={question.id}>
								<h3>{question.question_text}</h3>
								<label>
									<input
									type="radio"
									name={`question-${question.id}`}
									value={question.option_1}
									checked={answers[question.id] === question.option_1}
									onChange={(event) => handleAnswerChange(event, question.id)}
									/>
									{question.option_1}
								</label>
								<label>
									<input
									type="radio"
									name={`question-${question.id}`}
									value={question.option_2}
									checked={answers[question.id] === question.option_2}
									onChange={(event) => handleAnswerChange(event, question.id)}
									/>
									{question.option_2}
								</label>
								<label>
									<input
									type="radio"
									name={`question-${question.id}`}
									value={question.option_3}
									checked={answers[question.id] === question.option_3}
									onChange={(event) => handleAnswerChange(event, question.id)}
									/>
									{question.option_3}
								</label>
								<label>
									<input
									type="radio"
									name={`question-${question.id}`}
									value={question.option_4}
									checked={answers[question.id] === question.option_4}
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