import React, { useRef } from 'react'
import { NavLink } from 'react-bootstrap'
import { json, useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const email = useRef()
  const password = useRef()
  
  
  const HandleLogin =()=>{
   navigate('/product')
  }

  return (
    <div>
         <div style={{marginLeft:"350px"}} className='d-flrx  align-items-center  justify-content-center w-100 '> 
          <div style={{width:"300px",height:"min-content",borderRadius:"5px",color:"green", padding:"20px"}} className='login rounded '>
       <h2 className='mb-3'>Login From</h2>
       <div className='from-group mb-2'>
        <label htmlFor="email" className='from-label'>Email address</label><br />
        <input style={{width:"500px",height:"40px"}} type="email" className='from-control' ref={email} required /> 
        </div>  
        <div className='from-group mb-2'>
        <label htmlFor="password"className='from-label'>password</label><br />
        <input style={{width:"500px",height:"40px"}} type="password" className='from-control' ref={password} required /> <br />
        <a href="#">Froget password</a>
        </div>  
        <div className='from-group mb-2 from-check'>
            <input type="checkbox"  />
        <label htmlFor="checkbox" className='from-check-label'>remember me</label>
        </div>    

        <button onClick={HandleLogin} style={{width:"500px"}} type='submit' className='btn w-100 btn-success mt-2'>SIGN IN</button>    
         <NavLink to="signup"  className='m-5 mt-5'><u>Create an Account</u></NavLink>
          </div><br /><br /><br />
    </div>

     
    </div>
  )
}

export default Login
