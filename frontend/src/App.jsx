import React from 'react'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import { Heading1, Home } from 'lucide-react'
import Signup from './pages/Signup'
import Dashboard from "./pages/Dashboard"
const App = () => {
  return (
    <div className=''>
     
     <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={ <h1>forgot passowrd page</h1>} />
      <Route path="/home" element={ <Dashboard /> } />



     </Routes>
    </div>
  )
}

export default App
