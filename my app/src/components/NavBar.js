import React from 'react'
import logo from '../images/LogoCRM.jpg'
import {useNavigate} from 'react-router-dom'
const NavBar = () => {
  
  const navigate =useNavigate()

  return (
    <nav>
      <div className="logo-container">
        <img src ={logo} alt="LOGO"/>
      </div>
      <div className="controls-container">
        <div className="icons" onClick ={() => navigate('/ticket')}>+</div>
        <div className="icons"  onClick ={() => navigate('/')}> ^ </div>
      </div>

    </nav>
  )
}

export default NavBar