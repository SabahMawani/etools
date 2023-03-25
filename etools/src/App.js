import React, { useState, useContext, createContext, useEffect } from 'react';
import './App.css';
import UserContext from './components/UserContext';
import {BrowserRouter as Router, Switch, Route, Routes, Navigate, useNavigate, json} from 'react-router-dom';
import axios from 'axios';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
