import React from "react";
const Navbar = () =>{
    return(
        <nav className='nav-wrapper black darken-3'>
            <div className='container'>
                <div className='row'>
                    <a className='brand-logo'>E-Tools</a>
                    <div >
                        <ul className='right'>
                            <li>
                              <a href='/profile'>Profile</a>
                            </li>
                            <li>
                                <a href='/'>ContactUs</a>
                            </li>
                            <li>
                              <a href="/login">Page 3</a>
                            </li>
                            <li>
                              <a href="/Profile">Page 3</a>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
        </nav>
    );
}
export default Navbar;