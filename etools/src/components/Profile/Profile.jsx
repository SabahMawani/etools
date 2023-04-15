import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../UserContext';
function Profile(){
    const {handleLogout} = useContext(UserContext)
    const [username,setusername] = useState('')
    const [userid,setuserid] = useState('123')
    const [email,setemail] = useState('@xyz.com')
    const [gender,setgender] = useState('-')
    const [type,settscore] = useState('0')
    const [quiz,setqscore] = useState('0')
    /*Now Ddefining hook to get values from django back end  */
    useEffect(()=>{
        axios.get('path')
        .then((response)=>{
            const data = response.data
            setusername(data.username);
            setuserid(data.userid);
            setemail(data.email);
            setgender(data.gender);
            setqscore(data.quiz);
            settscore(data.type);
        })
        .catch((error)=>{
            alert('Error');
        })
    } , []);
    const handleclick = () =>{
        handleLogout();
    }
    return(
        <div>
            <h2>Welcome to E-tools {username}</h2>
            <p className=''>User ID : {userid}</p>
            <p className=''>Email : {email}</p>
            <p className=''>Gender : {gender}</p>
            <p className=''>Quiz High Score : {quiz}</p>
            <p className=''>Typing High Score : {type}</p>
            <div className='tobtn-group'>
            <button onClick={handleclick}>Logout</button>
            </div>
        </div>
    );
}
export default Profile;