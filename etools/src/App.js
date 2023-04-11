import React, { useState, useContext, createContext, useEffect } from 'react';
import './App.css';
/*import UserContext from './components/UserContext';*/
import {BrowserRouter as Router, Switch, Route, Routes, Navigate, useNavigate, json} from 'react-router-dom';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

/*Importing Components from Index.js in pages*/
import {
  Thesaurus,
  TypeMaster,
  TextOptimizer,
  Quiz,
  CU, /*ContactUS*/
  NB, /*Navbar*/
  N,
  P, /*Profile*/
} from './pages';
function App() {

/*  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const data = {
    user,
    isLoading,
    isLoggedIn,
    setUser,
    setIsLoading,
    setIsLoggedIn
  }

  useEffect(() => {
    setIsLoading(true);
    setUser(JSON.parse(sessionStorage.getItem("user")));
    setIsLoading(false);
  }, [])
*/
  return (
    /*<UserContext.Provider value={data}>*/
    <div>
    <NB />
      <Router>
        {/*Profile Page Will be default page for user once logged in */}
        <Routes>
          <Route path='/' element={<P />} />
        </Routes>
        {/*-----------------------Other pages---------------------------*/}
        <Routes>
          <Route path='/thesaurus' element={<Thesaurus />} />
        </Routes>
        <Routes>
          <Route path='/typemaster' element={<TypeMaster />} />
        </Routes>
        <Routes>
          <Route path='/textoptimizer' element={<TextOptimizer />} />
        </Routes>
        <Routes>
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
        <Routes>
          <Route path='/ContactUs' element={<CU />} />
        </Routes>
        <Routes>
          <Route path='/Notes' element={<N />} />
        </Routes>
      </Router>
      </div>
    /*</UserContext.Provider>*/
  );
}

export default App;


