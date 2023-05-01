import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navstyle.css';
const Mainnav = () =>{
    /* Using useHistory hook to setting up navigations  */
    const navigate = useNavigate();
    const handlelogin = () =>{
        navigate('/LogIn');
    }
    const handlesignup = () =>{
        navigate('/Signup');
    }
    return(
        <div>
            <nav className='nav-wrapper'>
                    <a className='brand-logo'>E-Tools</a>
                        <ul>
                            <li>
                              <a href="/">MainPage</a>
                            </li>
                            <li>
                              <button className='btn' onClick={handlelogin}>LogIn</button>
                            </li>
                            <li>
                              <button className='btn' onClick={handlesignup}>signup</button>
                            </li>
                        </ul>
        </nav>
        </div>
    )
}
export default Mainnav;