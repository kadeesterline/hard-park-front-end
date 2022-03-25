import React from 'react'
import '../styles/index.css'

function NavBar() {
  return (
    <div id='navbar' className='navbar-custom'>
        <nav class="navbar navbar-custom fixed-top navbar-expand-sm navbar-light bg-dark">
            <div class="container-fluid ">
                <h1 class="navbar-brand px-5" id="nav-title">HARD PARK</h1>
                
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <a class="nav-link m-2 p-2"  id='home-link' aria-current="page" href="none">Home</a>
                        <a class="nav-link m-2 p-2" id='gallery-link' href="none">The Lot</a>
                        <a class="nav-link m-2 p-2" id='add-link' href="none">Park your car</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar