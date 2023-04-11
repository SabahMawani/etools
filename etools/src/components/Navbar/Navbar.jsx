import React from "react";
const Navbar = () =>{
    return(
        <nav className='nav-wrapper rgb(45, 3, 59) darken-3'>
            <div className='container'>
                <div className='row'>
                    <a className='brand-logo'>E-Tools</a>
                    <div >
                        <ul className='right'>
                            <li>
                              {/*Profile page will be our default page */}
                              <a href='/'>Profile</a>
                            </li>
                            <li>
                              <a href='/Thesaurus'>Thesaurus</a>
                            </li>
                            <li>
                              <a href='/TextOptimizer'>TextOptimizer</a>
                            </li>
                            <li>
                              <a href='/TypeMaster'>TypeMaster</a>
                            </li>
                            <li>
                              <a href='/Quiz'>Quiz</a>
                            </li>
                            <li>
                              <a href='/Notes'>Notes</a>
                            </li>
                            <li>
                                <a href='/ContactUs'>ContactUs</a>
                            </li>
                            {/*<li>
                              <a href="/"></a>
                            </li>
                            <li>
                              <a href="/Axios">Axios</a>
                            </li>
                            <li>
                              <a href="/signup">signup</a>
                            </li>*/}
                        </ul>
                    </div>
                </div>                
            </div>
        </nav>
    );
}
export default Navbar;