import React from "react";
import './Navstyle.css';
const Navbar = () =>{
    return(
      <div>
        <nav className='nav-wrapper '>
                    <a className='brand-logo'>E-Tools</a>
                        <ul>
                            <li>
                                <a href='/ContactUs'>ContactUs</a>
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
                              {/*Profile page will be our default page */}
                              <a href='/'>Profile</a>
                            </li>
                        </ul>
        </nav>
        </div>
    );
}
export default Navbar;