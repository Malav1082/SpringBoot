// import './App.css'
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
//           <Route path='/' element = { <ListEmployeeComponent/> }></Route>
//           {/* <Route path='/' element = { <LoginComponent/> }></Route> */}

//           {/* Route to dashboard */}
//           {/* <Route path="/dashboard" element={<DashboardComponent />} />  */}

//           {/* //http://localhost:3000/employees */}
//           <Route path='/employees' element = { <ListEmployeeComponent/> }></Route>
//           {/* //http://localhost:3000/add-employee */}
//           <Route path='/add-employee' element = { <EmployeeComponent/> }></Route>
//         </Routes>
//       <FooterComponent/>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginComponent";
import Register from "./components/RegisterComponent";
import ForgotPassword from "./components/ForgotPasswordComponent"; // You'll need to create this component
import ResetPassword from "./components/ResetPasswordComponent"; // You'll need to create this component
import Home from "./components/Home"; // Your home or landing page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;

