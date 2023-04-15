import React, { Component ,useContext, useState} from 'react';
import axios from 'axios';
import UserContext from '../UserContext';
const User =() => {
  /*Use context to access app.js functions */
  const { handleLogin } = useContext(UserContext);
    /**Variable in Login function  */
    const [username,setusername] = useState(null)
    const [password,setpassword] = useState(null)
    const [error,seterror] = useState(false)
    /*Sending data to backend */
    const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin();
      /*if (username && password) {
        axios.post('filepath', { username, password })
          .then(response => {
            alert('Logged In Successfully')
            handleLogIn();
            /* set state true to show user dashboard*/
       /*   })
          .catch(error => {
            /*show error*/
       /*     alert(error)
            seterror(true)
          });
      }*/
    }
    /*Handle functions  */
    const handleusername = (e) =>{
      setusername(e.target.value);
    }
    const handlepassword= (e) =>{
      setpassword(e.target.value);
    }
    /*Rendering Body*/
  return(
    <div>
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={username} onChange={handleusername} />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={handlepassword} />
    </div>
    {error &&
      <p> Invalid Login Or SignUp </p>
    }
    <button type="submit">Submit</button>
  </form>
  </div>
  )
}

export default User;
