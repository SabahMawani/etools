import React, { useState } from 'react';
import './grammarnotes.css';

const GrammarNotes = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicstatus,settopicstatus] = useState(false)
  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    settopicstatus(true);
  };
  const handleback=()=>{
    settopicstatus(false);
    setSelectedTopic(null);
  }

  const topics = [
    {
      id: 1,
      title: 'Nouns',
      content: 'A noun is a word that represents a person, place, thing, or idea.',
    },
    {
      id: 2,
      title: 'Verbs',
      content: 'A verb is a word that describes an action or state of being.',
    },
    {
      id: 3,
      title: 'Adjectives',
      content: 'An adjective is a word that describes a noun or pronoun.',
    },
    {
      id:4,
      title:'Pronoun',
      content:'Pronoun are used at the place of noun'
    }
  ];

  return (
    <div>
      {!topicstatus && (
        /*when user hasn't selected any topic*/
        <>
          <h2>Grammar Topics</h2>
          <p>Click On Topics to View Details .</p>
          <div className='gn-cont'>
            <ul>
              {topics.map((topic) => (
                <li key={topic.id} onClick={() => handleTopicClick(topic)}>
                  <h5 className='topicNames'>{topic.id}- {topic.title}</h5>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      {selectedTopic && (
        <div>
          <h3>{selectedTopic.title}</h3>
          <p>{selectedTopic.content}</p>
            <button className='gn-btn' type="submit" onClick={handleback}>Back</button>
        </div>
      )}
    </div>
  );

};

export default GrammarNotes;