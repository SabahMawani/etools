import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MN from '../../components/Main/Mainnav'; /*navbar for main*/
import MP from '../../components/Main/mainpage'; /*mainpage below navbar that will have content */
import LI from '../Login/LogIn';
import SU from '../Signup/SignUp';
const Main = () =>{

    return(
        <div>
            {/*Navbar will be globally above all components rendering on screen*/}
            
            {/*Adding routes for login signup pages */}
            <Router>
            <MN />
                <Routes>
                    <Route path='/' element={<MP/>} />
                    <Route path='/LogIn' element={<LI/> } />
                    <Route path='/Signup' element={<SU/>} />
                </Routes>
            </Router>
        </div>
    )
}
export default Main; 