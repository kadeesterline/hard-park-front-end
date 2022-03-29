import React from 'react'
import {NavLink} from "react-router-dom"
import '../styles/index.css'

function NavBar({goToLot}) {

    
    
  return (
    <div id='navbar' className='navbar-custom'>
        <nav className="navbar navbar-custom fixed-top navbar-expand-sm  ">
            <div className="container-fluid ">
                <h1 className="navbar-brand p-1 m-2" id="nav-title">HARD PARK</h1>
                
                
                <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <NavLink to="/" exact  activeStyle = {{background: "white", color:"black"}} className="nav-link m-2 p-2 btn btn-custom">Home</NavLink>
                        <NavLink to="/lot" exact activeStyle = {{background: "white", color:"black"}} onClick={goToLot} className="nav-link m-2 p-2 btn btn-custom">The Lot</NavLink>
                        <NavLink to="/park" exact activeStyle = {{background: "white", color:"black"}} className="nav-link m-2 p-2 btn btn-custom">Park your car</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar