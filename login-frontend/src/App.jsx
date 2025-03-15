import React from 'react';
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import User from './Auth/User';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>Welcome to home page</div>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </Router>
  )
};

export default App;