import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GrammarNotes = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicstatus,settopicstatus] = useState(false)
  const [response, setResponse] = useState({ id: null, name: null });
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // fetch initial data
    axios.get('/api/initial-data')
      .then(res => {
        setResponse(res.data);
        setTopics(res.data.topics);
      })
      .catch(err => console.log(err));
  }, []);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    axios.post('/api/selected-topic', { id: topic.id, name: topic.title })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handleback=()=>{
    settopicstatus(false);
    setSelectedTopic(null);
  }

  return (
    <div>
      {response.id && response.name && !topicstatus && (
        <div>
          <h2>Grammar Topics</h2>
          <p>Click On Topics to View Details .</p>
          <p>Response ID: {response.id} - Response Name: {response.name}</p>
          <ul>
            {topics.map((topic) => (
              <li key={topic.id} onClick={() => handleTopicClick(topic)}>
                <h5 className='topicNames'>{topic.id}- {topic.title}</h5>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedTopic && (
        <div>
          <h3>{selectedTopic.title}</h3>
          <p>{selectedTopic.content}</p>
          <div className='tobtn-group'>
            <button type="submit" onClick={handleback}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrammarNotes;
