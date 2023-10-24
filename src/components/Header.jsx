import React from 'react'
import "../styles/header.scss";

const Header = () => {
  return (
    <nav>
        <div className="logo">
            <span>Logo Here.</span>
        </div>

        <div className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header