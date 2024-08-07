import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashborad from './screen/Dashborad'
import Signup from './screen/Signup'
import Login from './screen/Login'
import Allproducts from './screen/Allproducts'
import Single from './screen/Single'



const App = () => {
  return (
    <div>
      
      <Routes>
       <Route path='/' element={<Dashborad/>}>

        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='product' element={<Allproducts/>}/>
        <Route path='products/:id' element={<Single/>}/>
       </Route>


      </Routes>
    </div>
  )
}

export default App
