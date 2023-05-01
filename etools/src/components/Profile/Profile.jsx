import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './profile.css';
import pImg from './../../assets/profile.jpg';
import UserContext from '../UserContext';

function Profile(){
    //getting userid from local storage
    const storedUserId = localStorage.getItem('userid');
    //user context creation to use user id here 
    const {handleLogout, userid} = useContext(UserContext);

    const [id,setID] = useState('');
    const [username,setusername] = useState('');
    const [email,setemail] = useState('');
    const [gender,setgender] = useState('-');
    const [type,settscore] = useState('-');
    const [quiz,setqscore] = useState('-');

    useEffect(()=>{
        if(storedUserId){
            setID(storedUserId);
        }
        else{
            setID(userid);
        }
    }, [userid, storedUserId]);

    useEffect(() => {
        if (id) { // check that id is not falsy (null, undefined, etc.)
            axios.post('http://localhost:8000/get_user_info/', {id})
                .then(response=>{
                    setusername(response.data.username);
                    setemail(response.data.email);
                    setgender(response.data.gender);
                    setqscore(response.data.quiz);
                    settscore(response.data.type);
                })
                .catch((error)=>{
                    alert('Error');
                })
        }
    }, [id]);

    const handleclick = () =>{
        handleLogout();
    }

    return(
        <div className='profile-background'>
            <img className='profile-bg-img' src={pImg} alt="Background Image" />
            <div className='profile-container'>
                <div className='heading-container'>
                    <h2 className='profile-heading'>Welcome to E-tools {username}</h2>
                    <div className='pro-container'>
                        <p className=''><b>User ID : </b>{id}</p>
                        <p className=''><b>Email : </b>{email}</p>
                        <p className=''><b>Gender : </b>{gender}</p>
                        <p className=''><b>Quiz High Score : </b>{quiz}</p>
                        <p className=''><b>Typing High Score : </b>{type}</p>
                    </div>
                    <div className='tobtn-group'>
                        <button onClick={handleclick}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
