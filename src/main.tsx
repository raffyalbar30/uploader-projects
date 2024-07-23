import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Routes } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Table from './pages/Table.tsx';
import Loginpage from './pages/Auth/Loginpage.tsx';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
   <Router>
        <Routes>
         <Route path ="/" element={<App />}></Route>
         <Route path ="/auth/Login" element={<Loginpage />}></Route>
         <Route path ="/table" element={<Table />}></Route>
        </Routes>
      </Router>
  </React.StrictMode>,
  </QueryClientProvider>

)
