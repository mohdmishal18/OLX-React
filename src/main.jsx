import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {FirebaseContext} from './store/FirebaseContext'
import Context from './store/FirebaseContext'
import firebase from './firebase/config.js'
import './index.css'  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>,
)
