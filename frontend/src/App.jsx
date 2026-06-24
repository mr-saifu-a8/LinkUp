import React from 'react'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import { Home } from 'lucide-react'

const App = () => {
  return (
    <div className=''>
     
     <Routes>
      <Route path="/auth/login" element={<Login />} />
     </Routes>
    </div>
  )
}

export default App
