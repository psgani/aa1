

import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/Register';
import AccountSettings from './components/Display';

const App = () =>{
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/accsettings' element = {<AccountSettings/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;


