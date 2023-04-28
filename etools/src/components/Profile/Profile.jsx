import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './profile.css';
import pImg from './../../assets/profile.jpg';
import UserContext from '../UserContext';
function Profile(){
    const {handleLogout} = useContext(UserContext)
    const [username,setusername] = useState('unknown')
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
        <div className='profile-background'>
            <img className='profile-bg-img' src={pImg} alt="Background Image" />
            <div className='profile-container'>
                <div className='heading-container'>
                    <h2 className='profile-heading'>Welcome to E-tools {username}</h2>
                    <div className='pro-container'>
                        <p className=''><b>User ID : </b>{userid}</p>
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