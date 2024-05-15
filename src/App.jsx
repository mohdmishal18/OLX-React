import React from 'react';
import { useEffect , useContext } from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { AuthContext  } from './store/FirebaseContext';
import Post from './store/PostContext.jsx'
import { auth } from './firebase/config';
import './App.css';

import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'

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
    <Post>
      <Router>
        <Routes>

          <Route path='/' element={<Home/>}/>

          <Route path='/signup' element={<Signup/>}/>

          <Route path='login' element={<Login/>}/>

          <Route path='/create' element={<Create/>}/>

          <Route path='/view' element={<View/>}/>

        </Routes>
      </Router>
    </Post>
    </div>
  );
}

export default App;