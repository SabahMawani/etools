import React from 'react';
import { useNavigate } from 'react-router-dom';
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
            <nav className='nav-wrapper rgb(45, 3, 59) darken-3'>
            <div className='container'>
                <div className='row'>
                    <a className='brand-logo'>E-Tools</a>
                    <div >
                        <ul className='right'>
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
                    </div>
                </div>                
            </div>
        </nav>
        </div>
    )
}
export default Mainnav;