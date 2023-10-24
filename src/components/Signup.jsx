import React, {useRef} from 'react'
import { Form } from 'react-router-dom'
import "../styles/signup.scss";



const submitHandler = () =>{
    console.log("Hello i am signup");
}


const Signup = () => {


const emailRef = useRef();
const passwordRef = useRef();
const repasswordRef = useRef();

  return (
   <div className="sign">
    <h1>Sign up page</h1>
       <form onSubmit={submitHandler}>
           <div className="signup-inputs">
            <label >
                Email
            </label>
            <input type='email'
             ref={emailRef}
             name='email'
             required
             />
           
           <label>
            Password
           </label>
           <input type="password"
              name='password'
              ref={passwordRef}
              required
           />

           <label>
              Re-enter Password
           </label>
           <input type="password" 
               ref={repasswordRef}
               name='reEnterPassword'
               required
           />

           <button type='submit'>Create Account</button>

           </div>
       </form>
   </div>
  )
}

export default Signup