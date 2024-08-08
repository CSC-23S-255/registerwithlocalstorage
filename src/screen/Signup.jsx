import React, { useRef, useState } from 'react'
import { NavLink } from 'react-bootstrap'
import { json, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  // const name = useRef()
  // const email = useRef()
  // const password = useRef()

  // const handleclick =()=>{
  //   console.log(name.current.value,email.current.value,password.current.value)
  //   localStorage.setItem("name",name.current.value)
  //   localStorage.setItem("email",email.current.value)
  //   localStorage.setItem("password",password.current.value)
  //   localStorage.setItem("Signup",email.current.value)
  
  //   alert("Acount Created successfully")
  //   navigate("/login")
  // } 
  const [Input,setInput] = useState({
    name:"",
    email:"",
    password:"",
  })
  const handlesignup = (e)=>{
  e.preventDefault();
  localStorage.setItem("user",JSON.stringify(Input));
   navigate('/login')
   alert("Account Created successfully")
  }
  return (
    <div>
    
    <div style={{height:"100vh",marginLeft:"350px"}} className='d-flrx  align-items-center  justify-content-center w-100 '> 
          <div style={{width:"300px",height:"min-content",borderRadius:"5px",color:"Green", padding:"20px"}} className='login  rounded'>
       <h2 className='mb-3'>Signup From</h2>
       <div className='from-group mb-2'>
        <label htmlFor="text" className='from-label'>your name</label><br />
        <input style={{width:"500px",height:"40px"}} type="text" className='from-control' 
         name='name' value={Input.name} onChange={(e)=>setInput({...Input,[e.target.name] : e.target.value,})}
        required /> 
        </div> 
       <div className='from-group mb-2'>
        <label htmlFor="email" className='from-label'>Email address</label><br />
        <input style={{width:"500px",height:"40px"}} type="email" className='from-control'
        name='email' value={Input.email} onChange={(e)=>setInput({...Input,[e.target.name] : e.target.value,})}
        required /> 
        </div>  
        <div className='from-group mb-2'>
        <label htmlFor="password"className='from-label'>password</label><br />
        <input style={{width:"500px",height:"40px"}} type="password" className='from-control' 
        name='password' value={Input.password} onChange={(e)=>setInput({...Input,[e.target.name] : e.target.value,})}
        required /> 
        </div>  
        <div className='from-group mb-2 from-check'>
            <input type="checkbox"  />
        <label htmlFor="checkbox" className='from-check-label'>remember me</label>
        </div>     

        <button onClick={handlesignup} style={{width:"500px",height:"40px"}} type='submit' className='btn w-100 btn-success mt-2'>SIGN Up</button>    
          <NavLink to="login" style={{padding:"30px"}}><u>Already have an account</u></NavLink>
          </div>
    </div>
    </div>
  )
}

export default Signup
