import React,{useState} from "react";
import './signup.css';
import axios from 'axios';
import '../redandgreen.css';
const Signup =()=>{
    const[name,setname] = useState('')
    const[nameerror,setnameerror] = useState(false)

    const[gender,setgender] = useState('')
    const[gendererror,setgendererror] = useState('')

    const[password,setpass] = useState('')
    const[passworderror,setpasserror] = useState(false)

    const[email,setemail] = useState('')
    const[emailerror,setemailerror] = useState(false)

    const[id,setid] = useState('')
    /*This will record form submission status */
    const[status,setstatus] = useState(false)
    /*to show error in submission*/
    const[error,seterror] = useState(false)
    /*helper functions that will set values in variables */
    const handlename =(event)=>{
        setname(event.target.value);
        setnameerror(false)
    }
    const handlepassword =(event) =>{
        setpass(event.target.value)
        setpasserror(false)
    }
    const handlegender = (event) =>{
        setgender(event.target.value)
        setgendererror(false)  
    }
    const handleemail =(event) =>{
        setemail(event.target.value)
        /*setemailerror(false)*/
        setemailerror(!validateEmail(event.target.value));
    }
    /*validation of email through regular expressions*/
    const validateEmail = (email) => {
        const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return re.test(email); /*return true if valid*/
      };

    /*handle's submit post and gets value from backend */
    const handlesubmit =(event)=>{
        event.preventDefault();
        if(password && email && name && gender)
        {
            axios.post('http://localhost:8000/signup/',{password,name,email,gender})
            .then(response=>{
                 /*to show id making form submission status true*/
                 setstatus(true)
                /* setting user id for user */
                setid(response.data.id)
                })
            .catch(error=>{
                /*setstatus(true)*/
               seterror(true)
            })
        }
        else{
            if(!name)
            {
                setnameerror(true)
            }
            if(!password)
            {
                setpasserror(true)
            }
            if(!gender)
            {
                setgendererror(true)
            }
            if(!email && !validateEmail(email))
            {
                setemailerror(true)
            }
            /*wrong inputs problem , prompt error */
            seterror(true)
        }
    }
    return(
        <div>
        <div>
            <h1 className='s-cont'>Sign-Up</h1>
            {!status && 
            <form className="s-container" onSubmit={handlesubmit}>
                <label htmlFor="n"><p>Name</p> </label>
                <input type="text" id="n" value={name} onChange={handlename}/>
                {nameerror &&
                <p className='Red'>Enter Valid Name</p>
                }
                <label htmlFor="pass"><p>Password</p> </label>
                <input type="Password" id="pass" value={password} onChange={handlepassword}/>
                {passworderror &&
                <p className='Red'>Enter Valid Password</p>
                }
                {/*<label htmlFor="g">Gender </label>
                <input type="text" id="g" value={gender} onChange={handlegender}/>
                {gendererror &&
                <p>Choose a gender</p>
                }*/}
                <label htmlFor="gender"><p>Gender:</p></label>
                <div>
                    <label htmlFor="male" className="radio-label">
                    <span>Male</span>
                    <input type="radio" id="male" name="gender" value="male" onChange={handlegender} className="radio-input" />
                    <span className="radio-checkmark"></span>
                    </label>
                    <label htmlFor="female" className="radio-label">
                    <span>Female</span>
                    <input type="radio" id="female" name="gender" value="female" onChange={handlegender} className="radio-input" />
                    <span className="radio-checkmark"></span>
                    </label>
                    <label htmlFor="other" className="radio-label">
                    <span>Other</span>
                    <input type="radio" id="other" name="gender" value="other" onChange={handlegender} className="radio-input" />
                    <span className="radio-checkmark"></span>
                    </label>

                </div>
                {gendererror &&
                <span className='Red'>Choose a Gender</span>
                }
                <label htmlFor="e"><p>Email</p></label>
                <input type="text" id="e" value={email} onChange={handleemail}/>
                {emailerror &&
                <p className='Red'>Enter valid Email</p>
                }
                <div >
                    <button className='s-btn' type="submit">Sign up</button>
                </div>
                
                {/*prompt for not signup response*/}
                {error && 
                <p className='Red'>Can't sign up ,Retry !</p>
                }
            </form>
            }
            </div>
            {/* This will only run when sign up is successful */}
            {status && 
                <div>
                <h3>User-Id : {id}</h3>    
                <p className='Green'>Sign Up Successful, Make sure to save USER-ID for later Log-in's.</p>
                </div>
                }
        </div>
    )
};
export default Signup;