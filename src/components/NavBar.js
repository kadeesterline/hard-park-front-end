import React from 'react'
import {NavLink} from "react-router-dom"
import '../styles/index.css'

function NavBar({goToLot}) {

    
    
  return (
    <div id='navbar' className='navbar-custom'>
        <nav className="navbar navbar-custom fixed-top navbar-expand-sm  ">
            <div className="container-fluid ">
                <div className='col-1 justify-content-center' id='navbar-logo'>
                    <div className='row' id='navbar-title-top'>
                        <h1 className="navbar-brand nav-title "  >HARD</h1>
                    </div>
                    
                    <div className='row justify-content-center' >
                        <hr id='navbar-hr'/>
                    </div>
                    
                    <div className='row' id='navbar-title-bottom'>
                        <h1 className="navbar-brand nav-title" >PARK</h1>
                    </div>
                    
                </div>
                
                
                
                <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <NavLink to="/" exact   className=" m-2 p-2 btn btn-custom">Home</NavLink>
                        <NavLink to="/lot" exact  onClick={goToLot} className=" m-2 p-2 btn btn-custom">The Lot</NavLink>
                        <NavLink to="/park" exact  className=" m-2 p-2 btn btn-custom">Park your car</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar