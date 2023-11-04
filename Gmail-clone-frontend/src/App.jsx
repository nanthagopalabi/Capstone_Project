import { useState } from 'react';
import './App.css';
import Layout from './components/MsgBodyPage/Layout';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SignUp from './All_pages/RegisterPage';
import SignIn from './All_pages/LoginPage';
import Inbox from './components/Inbox';
import { ToastContainer } from 'react-toastify';
import Forget from './All_pages/ForgetPage';
import { Reset } from './All_pages/ResetPage';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from './components/redux-container/slices/emailSlice';

function App() {
  const token=localStorage.getItem('token')||null;

// const logout = () => {
//   localStorage.removeItem('token');
//   setToken('');
// }
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/register' Component={SignUp}/>
          <Route exact path='/' element={<SignIn />}/>
          <Route path='/protected' element={<Inbox/>}>
          </Route>
          <Route path='/forget' Component={Forget}/>
          <Route path='/reset/:resetToken' Component={Reset}/>
        </Routes>
      </BrowserRouter>
    <ToastContainer/>
    </div>
  )
}
export default App