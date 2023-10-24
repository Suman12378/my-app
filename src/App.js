import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Loader from './components/Loader';
function App() {
  return (
   <Router>

    <Header/>
    
      <Routes>
            <Route path='/' element = {<Loader/>}/>
            <Route path='/signup' element = {<Signup/>} />
            <Route path='/login'  element = {<Login/>} />
          
      </Routes>


   </Router>
  );
}

export default App;
