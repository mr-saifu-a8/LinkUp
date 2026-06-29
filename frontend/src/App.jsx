import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Heading1, Home } from 'lucide-react'

import { Dashboard , Login , Signup , Auth, ForgotPassPage } from "./pages/index"

const App = () => {
  return (
    
     
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={ <ForgotPassPage /> } />
      <Route path="/home" element={ <Dashboard /> } />
      <Route path='/auth' element= { <Auth /> } />  


     </Routes>

  )
}

export default App
