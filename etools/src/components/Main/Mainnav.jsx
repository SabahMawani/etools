import React from 'react';
import { useHistory } from 'react-router-dom';
const Mainnav = () =>{
    /* Using useHistory hook to setting up navigations  */
    const handlelogin = () =>{

    }
    const handlesignup = () =>{

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
                              <button onClick={handlelogin}>LogIn</button>
                            </li>
                            <li>
                              <button onClick={handlesignup}>signup</button>
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