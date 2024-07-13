import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Loginpage from './Components/Authtentication/Loginpage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Router>
        <Routes>
         <Route path ="/" element={<App />}></Route>
         <Route path ="/auth/Login" element={<Loginpage />}></Route>
        </Routes>
      </Router>
  </React.StrictMode>,
)
