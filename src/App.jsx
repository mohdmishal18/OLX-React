import React from 'react';
import { useEffect , useContext } from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { AuthContext  } from './store/FirebaseContext';
import { auth } from './firebase/config';
import './App.css';

import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Create from './Pages/Create'

function App()
{
  const {user ,setUser} = useContext(AuthContext)
  useEffect(() =>
  {
    auth.onAuthStateChanged((user) =>
    {
      setUser(user);
    })
  })

  return (
    <div>
     <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='/signup' element={<Signup/>}/>

        <Route path='login' element={<Login/>}/>

        <Route path='/create' element={<Create/>}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;