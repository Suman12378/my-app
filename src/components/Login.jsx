import React from 'react'
import {Link} from "react-router-dom"
import "../styles/login.scss"

const Login = () => {

 const handleGoogleLogin = () =>{
  console.log("I am google handler");
 }

 const submitHandler = () =>{
  console.log("I am sumit");
 }


  return (
    <div className="signin-card">
      <h2>Log In</h2>
      <h5>Welcome Back!</h5>
      <button className="sign-in-box" onClick={handleGoogleLogin}>
       {' '}
       Sign in with google {' '}
      </button>
      <p>Or</p>

      <form onSubmit={submitHandler}>
        <div className="signin-inputs">
          <label>
            Email
          </label>
          <input type="email"
               name='email'
               placeholder='xyz@gmail.com'
               required
           />

           <label>Password</label>
           <input type="password" 
                name='password'
                placeholder='Password'
                required
           />

           <button className="login-box" type='submit'>
              {' '}
              Log In {' '}
           </button>
        </div>
      </form>

      <span>
        Not a member
        <Link className="link-text" to = "/Signup">
          {' '} 
          Get Started
        </Link>
      </span>
    </div>


  )
}

export default Login