import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TMImg from './../../assets/typemaster.webp';
import './typecontainer.css';

function TypeContainer() {
  const userID = localStorage.getItem('userid');
  //const {userid} = useContext(UserContext);
  const [exampleText, setExampleText] = useState('');
  const [inputText, setInputText] = useState('');
  const [wpm, setWpm] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    getExampleText();
  }, []);

  function getExampleText() {
    axios
      .get('http://localhost:8000/example_text/')//this is where the generated text will be brought to the front-end
      .then((response) => {
        setExampleText(response.data.exampleText);
        setEndTime.React.useState(null);
        setInputText('');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleInputChange(event) {
    const input = event.target.value;
    setInputText(input);
    setCurrentCharIndex(getCurrentCharIndex(input));
    if (!startTime) {
      setStartTime(Date.now());
    }
    if (input === exampleText) {
      setEndTime(Date.now());
	  calculateWpm();
    }
  }

  function getCurrentCharIndex(input) {
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) !== exampleText.charAt(i)) {
        return i;
      }
    }
    return input.length;
  }

  function calculateWpm() {
    const elapsedTime = (endTime - startTime) / 1000 / 60; // minutes
    const wordCount = exampleText.trim().split(/\s+/).length;
    const wpm = Math.round(wordCount / elapsedTime);
    setWpm(wpm);

    axios
      .post('http://localhost:8000/submit_speed/', { /*this is where the speed will be sent to the backend*/
        userID, // Replace with the user's ID
        wpm: wpm,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
	<>
		<div className="tm-container">
			<img className='tmbg-img' src={TMImg} alt="background" />
			<div className="tmimg-shadow"></div>
			<h1>TypeMaster</h1>
		</div>
		<div className="tm-main">
			<h1>Example text: </h1>
			<div className="tm-examplebox">
				<div className="tm-exampletext">
				{exampleText.split('').map((char, index) => {
					let className = '';
					if (index < currentCharIndex) {
						className = 'tm-correct';
					} else if (index === currentCharIndex) {
						className = 'tm-current';
					}
					return (
					<span key={index} className={className}>
						{char}
					</span>
					);
				})}
				</div>
			</div>
			<div>
				<textarea className="tm-input" type="text" value={inputText} onChange={handleInputChange} />
				{endTime && (
				<div className="tm-results">
					<p>
					Your typing speed is {wpm} WPM.
					</p>
				</div>
				)}
			</div>
			{endTime && (
				<button className="tm-button" onClick={getExampleText}>
				Restart
				</button>
			)}
		</div>
	</>
  );
}

export default TypeContainer;
