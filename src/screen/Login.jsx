import React, {  useState } from 'react'
import { NavLink } from 'react-bootstrap'
import { json, useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const [Input,setInput] = useState({
    email:"",
    password:"",
  })

  const handleLogin = (e)=>{
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(Input.email === loggeduser.email && Input.password === loggeduser.password){
      navigate('/product')
    }
    else{
      alert('something is wrong / first create account from signup page ')
    }
  }  

  return (
    <div>
         <div style={{marginLeft:"350px"}} className='d-flrx  align-items-center  justify-content-center w-100 '> 
          <div style={{width:"300px",height:"min-content",borderRadius:"5px",color:"green", padding:"20px"}} className='login rounded '>
       <h2 className='mb-3'>Login From</h2>
       <div className='from-group mb-2'>
        <label htmlFor="email" className='from-label'>Email address</label><br />
        <input   style={{width:"500px",height:"40px"}} type="email" className='from-control' 
         name='email' value={Input.email} onChange={(e)=>setInput({...Input,[e.target.name] : e.target.value,})}
         required /> 
        </div>  
        <div className='from-group mb-2'>
        <label htmlFor="password"className='from-label'>password</label><br />
        <input style={{width:"500px",height:"40px"}} type="password" className='from-control' 
         name='password' value={Input.password} onChange={(e)=>setInput({...Input,[e.target.name] : e.target.value,})}
        required /> <br />
        <a href="#">Froget password</a>
        </div>  
        <div className='from-group mb-2 from-check'>
            <input type="checkbox"  />
        <label htmlFor="checkbox" className='from-check-label'>remember me</label>
        </div>    

        <button onClick={handleLogin} style={{width:"500px"}} type='submit' className='btn w-100 btn-success mt-2'>SIGN IN</button>    
         <NavLink to="signup"  className='m-5 mt-5'><u>Create an Account</u></NavLink>
          </div><br /><br /><br />
    </div>

     
    // </div>
  //   <div className="form-container sign-in">
  //   <form onSubmit={handleLogin}>
  //     <h1 style={{marginLeft:"30px"}}>Log In</h1><br /><br />
  //     <input
  //       type="email"
  //       placeholder="Email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //       required
  //     /><br/><br/>
  //     <input
  //       type="password"
  //       placeholder="Password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //       required
  //     /> <br /><br />
  //     <button type="submit">Log In</button>
  //   </form>
  // </div>

  )
}

export default Login
