import React, { useState } from 'react';
import axios from 'axios';
import TOImg from './../../assets/TextOptimizer.jpg';
import './textoptimizercontainer.css';

function TextOptimizerContainer() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const recognition = new window.webkitSpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('');

    setInputText(transcript);
  };

  const startListening = () => {
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  const handleSummary = () => {
    axios.post('http://localhost:8000/get_summary/', { inputText }) //link summary python file here
    .then((response) => {
      setOutputText(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  };
  
  const handleParaphrase = () => {
    axios.post('http://localhost:8000/get_paraphrase/', { inputText }) //link paraphrase python file here
      .then((response) => {
        setOutputText(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGrammar = () => {
    axios.post('http://localhost:8000/get_grammarly/', { inputText }) // link grammar python file here
      .then((response) => {
        setOutputText(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleTextToSpeech = () => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(outputText);
  const voices = synth.getVoices();
  utterance.voice = voices[0];
  synth.speak(utterance);
  };
  
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
	<>
		<div className="to-container">
			<img className='tobg-img' src={TOImg} alt="background" />
			<div className="toimg-shadow"></div>
			<h1>Text Optimizer</h1>
		</div>
		<div className='to-main'>
			<textarea className='to-input' value={inputText} onChange={handleInputChange} />
			<div className='tobtn-group'>
				<button onClick={handleParaphrase}>Paraphrase</button>
				<button onClick={handleSummary}>Summary</button>
				<button onClick={handleGrammar}>Correct Grammar</button>
				{isListening ? (
					<button onClick={stopListening}>Stop Listening</button>
				) : (
					<button onClick={startListening}>Start Listening</button>
				)}
			</div>
			<div className='to-output'>{outputText}</div>
			<div className='tobtn-group'>
				<button onClick={handleTextToSpeech}>Listen</button>
			</div>
		</div>
	</>
  );
}

export default TextOptimizerContainer;
