import React,{useState} from 'react';
import './thesauruscontainer.css';
import TImg from './../../assets/thesaurus.jpg';
import axios from 'axios';

function ThesaurusContainer(props)
{
	const [word, setWord] = useState('');
	const [synonyms, setSynonyms] = useState([]);
	const [antonyms, setAntonyms] = useState([]);

	const getSynonymsAntonyms = () => {
    	axios.post('http://localhost:8000/api/synonyms_antonyms/', { word: word })/*this is where the python file will be linked*/
      	.then(response => {
    		setSynonyms(response.data.synonyms);
    		setAntonyms(response.data.antonyms);
      	})
    	.catch(error => {
    		console.error(error);
      	});
  	};
	return(
		<div className="t-main-container">
			<div className="t-container">
				<img className='tbg-img' src={TImg} alt="background" />
				<div className="timg-shadow"></div>
				<h1>Thesaurus</h1>
			</div>
			<div className='t-main'>
				<input className='t_input' type="text" value={word} onChange={e => setWord(e.target.value)} />
				<button className='t_button' onClick={getSynonymsAntonyms}>Generate</button>
				<div className='t_output'>
					<h4>Synonyms:</h4>
					<ul>
					{synonyms.map((synonym, index) => (
						<li key={index}>{synonym}</li>
					))}
					</ul>
				</div>
				<div className='t_output'>
					<h4>Antonyms:</h4>
					<ul>
					{antonyms.map((antonym, index) => (
						<li key={index}>{antonym}</li>
					))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ThesaurusContainer;