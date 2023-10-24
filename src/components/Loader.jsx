import React from 'react'
import "../styles/loader.scss";

const Loader = () => {
  return (
    <div className="loader">
         <img src={require('../assets/loader-back.gif.gif')} alt="loader Animation" className="loaderAnimation" />
    </div>
  )
}

export default Loader