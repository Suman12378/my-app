import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="home">
        <Link className="home-signup" to={"/signup"}>SignUp</Link>
        <p>Or</p>
        <Link className="home-signin" to={"/login"}>SignIn</Link>
    </div>
  )
}

export default Home