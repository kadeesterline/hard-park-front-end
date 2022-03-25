import React from 'react'
import '../styles/index.css'
import home1 from '../hard-park-photos/IMG_5168.jpg'
import home2 from '../hard-park-photos/IMG_7082.jpg'
import home3 from '../hard-park-photos/IMG_6356.JPG'

function Home() {
  return (
    <div id ='homepage'>
        <div id='def' className='custom-card m-2 p-2'>
            <h3 className='m-2 p-2'>HARD PARK</h3>
            <h5 className='text-muted m-2 p-2'>[hahrd-pahrk]</h5>
            <p className='m-2 p-2'> VERB </p>
            <p className='m-2 p-2'> The act of only ever parking a built car instead of using it at the track. </p>
            <h6 className='text-muted m-2 p-2'> Who says that's a bad thing? </h6>
        </div>
        
        <div className='custom-card m-2 p-2' id='home-card-2'>
            <h3 className='m-2 p-2'>
                HARD PARK is a car meet for the internet
            </h3>
            <h5 className='m-2 p-2'>
                Park your car, check out others
            </h5>
            <p className='m-2 p-2 text-muted'>
                Stance, Track, Euro, JDM, Muscle, Drift, Classic, Kit, Resto-mod, <br />
                Donks, Low-riders, Motorcycles, Trucks, 4x4's etc
            </p>
            <h5 className='m-2 p-2'> We don't care what you drive, or what you do with it</h5>
            <h5 className='m-2 p-2 text-muted'> Park, Drive, Slide, Send.</h5>
            <h6 > Check out the lot and add your car </h6>
        </div>

        <div className='m-2 p-2 custom-card' id='home-card-3'>
            <div className='btn-group-vertical btn-group-lg ' role='group'>
                <button type='button' className='btn-dark m-2 p-2'>
                    Euro
                </button>
                <button type='button' className='btn-dark m-2 p-2'>
                    JDM
                </button>
                <button type='button' className='btn-dark m-2 p-2'>
                    Domestic
                </button>
                <button type='button' className='btn-dark m-2 p-2'>
                    Trucks
                </button>
                <button type='button' className='btn-dark m-2 p-2'>
                    4x4's
                </button>
            </div>
        </div>

       
        <img src={home1} alt='black bmw' id='home1' />
        <img src={home2} alt='yellow bmw' id='home2'/>
        <img src={home3} alt='' id='home3'/>
        

    </div>   
  )
}

export default Home