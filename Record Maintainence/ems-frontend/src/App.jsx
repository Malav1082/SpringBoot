import './App.css'
// import FooterComponent from './components/FooterComponent'
// import HeaderComponent from './components/HeaderComponent'
// import EmployeeComponent from './components/EmployeeComponent'
// import ListEmployeeComponent from './components/ListEmployeeComponent'
// import LoginComponent from './components/LoginComponent'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

// function App() {

//   return (
//     <>
//       <BrowserRouter>
//       <HeaderComponent/>
//         <Routes>
//           {/* //http://localhost:3000 */}
//           {/* <Route path='/' element = { <ListEmployeeComponent/> }></Route> */}
//           <Route path='/' element = { <LoginComponent/> }></Route>

//           {/* Route to dashboard */}
//           <Route path="/dashboard" element={<DashboardComponent />} /> 

//           {/* //http://localhost:3000/employees */}
//           {/* <Route path='/employees' element = { <ListEmployeeComponent/> }></Route> */}
//           {/* //http://localhost:3000/add-employee */}
//           {/* <Route path='/add-employee' element = { <EmployeeComponent/> }></Route> */}
//         </Routes>
//       <FooterComponent/>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import ForgotPasswordComponent from './components/ForgotPasswordComponent';
import ResetPasswordComponent from './components/ResetPasswordComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
// import DashboardComponent from './components/DashboardComponent';

function App() {

  return (
    <>
      <Router>
        <HeaderComponent />
        <Routes>
          {/* Route to login page */}
          <Route path="/" element={<LoginComponent />} />

          {/* Route to registration page */}
          <Route path="/register" element={<RegisterComponent />} />

          {/* Route to forgot password page */}
          <Route path="/forgot-password" element={<ForgotPasswordComponent />} />

          {/* Route to reset password page */}
          <Route path="/reset-password" element={<ResetPasswordComponent />} />

          {/* Route to dashboard */}
          {/* <Route path="/dashboard" element={<DashboardComponent />} /> */}
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
