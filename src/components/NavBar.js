import React from 'react'
import {NavLink} from "react-router-dom"
import '../styles/index.css'

function NavBar({goHome}) {

    
    
  return (
    <div id='navbar' className='navbar-custom'>
        <nav class="navbar navbar-custom fixed-top navbar-expand-sm navbar-light ">
            <div class="container-fluid ">
                <h1 class="navbar-brand px-5" id="nav-title">HARD PARK</h1>
                
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <NavLink to="/" exact  activeStyle = {{background: "white", color:"#black"}} className="nav-link m-2 p-2 btn btn-custom">Home</NavLink>
                        <NavLink to="/lot" exact activeStyle = {{background: "white", color:"#black"}} className="nav-link m-2 p-2 btn btn-custom">The Lot</NavLink>
                        <NavLink to="/park" exact activeStyle = {{background: "white", color:"#black"}} className="nav-link m-2 p-2 btn btn-custom">Park your car</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar