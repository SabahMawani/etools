import React,{useState} from 'react';
import axios from 'axios';
function user1(){
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
            data = response.data
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
    return(
        <div>
            <h2>Welcome to E-tools {username}</h2>
            <p className='profile left'>User ID : {userid}</p>
            <p className='profile right'>Email : {email}</p>
            <p className='profile left'>Gender : {gender}</p>
            <p className='profile rightt'>Quiz High Score : {quiz}</p>
            <p className='profile left'>Typing High Score : {type}</p>
        </div>
    );
}
export default user1;