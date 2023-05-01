import React, { useState,  useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes ,vigate } from 'react-router-dom';
// import 'materialize-css/dist/css/materialize.min.css';
import UserContext from './components/UserContext';

import {
  Thesaurus,
  TypeMaster,
  TextOptimizer,
  Quiz,
  CU, /*ContactUS*/
  NB, /*Navbar*/
  N,
  P, /*Profile*/
  Main
} from './pages';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userid,setuserid] = useState();
  // Load loggedIn state from localStorage on component mount
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn) {
      setLoggedIn(JSON.parse(storedLoggedIn));
    }
  }, []);
  /*move user to profile page*/
  /*used in login component*/
  const handleLogin = (id) => {
    setuserid(id);    //id will be seent from login page 
    setLoggedIn(true);
    localStorage.setItem('loggedIn', JSON.stringify(true)); // Store loggedIn state in localStorage
    localStorage.setitem('userid',id);
  };

  /*used in logout component*/
  const handleLogout = () => {
    //on logout set id null for no user
    setLoggedIn(false);
    setuserid(null);
    localStorage.removeItem('loggedIn'); // Remove loggedIn state from localStorage
    localStorage.removeItem('userid');
  };
  /*values to be passed in user context*/
  const data = {
    userid,
    loggedIn,
    handleLogin,
    handleLogout // Add handleLogout to data
  }

  return (
    <UserContext.Provider value={data}>
      <div>
        {!loggedIn &&
          <div>
            <Main />
          </div>}
        {loggedIn &&
          <div>
            <NB />
            <Router>
              <Routes>
                <Route path='/thesaurus' element={<Thesaurus />} />
                <Route path='/typemaster' element={<TypeMaster />} />
                <Route path='/textoptimizer' element={<TextOptimizer />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/ContactUs' element={<CU />} />
                <Route path='/Notes' element={<N />} />
                <Route path='/*' element={<P />} />
              </Routes>
            </Router>
          </div>}
      </div>
    </UserContext.Provider>
  );
}

export default App;
