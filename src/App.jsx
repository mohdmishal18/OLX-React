import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Signup from './Pages/Signup' 

import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App()
{
  return (
    <div>
     <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='/signup' element={<Signup/>}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;