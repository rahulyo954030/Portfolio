import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='Navbar_parent'>
        <div>
          <Link to={"/"} >  <h1 data-text="RAHUL SINGH" >RAHUL SINGH</h1></Link>
            
        </div>
        <div>
         <Link to= {"bio"}>   <h4>Bio</h4></Link>
        </div>
        <div>
        <Link to= {"project"}>  <h4>Projects</h4></Link>
        </div>
        <div>
        <Link to= {"photos"}> <h4>Photos</h4></Link>
        </div>
        <div>
        <Link to= {"contact"}>  <h4>Contact</h4></Link>
        </div>
    </div>
  )
}

export default Navbar
