import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MN from '../../components/Main/Mainnav'; /*navbar for main*/
import MP from '../../components/Main/mainpage'; /*mainpage below navbar that will have content */
import LI from '../Login/LogIn';
import SU from '../Signup/SignUp';
const main = () =>{

    return(
        <div>
            <MN />
            <MP />
            {/*Adding routes for login signup pages */}
            <Router>
                <Routes>
                    <Route path='/LogIn' element={<LI/> } />
                </Routes>
                <Routes>
                <Route path='/Signup' element={<SU/>} />
                </Routes>
            </Router>
        </div>
    )
}