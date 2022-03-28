import React from 'react'
import '../styles/index.css'
import home1 from '../hard-park-photos/IMG_5168.jpg'
import home2 from '../hard-park-photos/IMG_7082.jpg'
import home3 from '../hard-park-photos/IMG_6356.JPG'

function Home() {
  return (
    <div id ='homepage' className='container-fluid'>
       
        <div className='row m-2  p-2 justify-content-evenly '>
            <div className='col-5 custom-card card  align-self-center' >
                <div id='def' className=' m-2 p-2 col'>
                    <h1 className='m-2 p-2'>HARD PARK</h1>
                    <h3 className='text-muted m-2 p-2'>[hahrd-pahrk]</h3>
                    <h4 className='m-2 p-2'> VERB </h4>
                    <h5> The act of only ever parking a built car instead of using it at the track. </h5>
                    <h5> Typically used in a negative context to put down others.</h5>
                    <h6 className='text-muted'>
                         Ex: 'Isn't it weird that they spent all that money building their car but they're never at the track?' <br />
                         'Yeah, hard parking is so lame'
                    </h6>
                    
                </div>
            </div>

            <div className='m-2 p-2 custom-card image-card col-4' id='home-image-card-1'>
                <img src={home1} alt='black bmw' className='home-image' id='home-image-1' />
            </div>
        </div>
        
        <div className='row m-2 p-2 justify-content-evenly'>
            
            <div className='m-2 p-2 custom-card image-card col-4' id='home-image-card-2'>
                <img src={home2} alt='yellow bmw' className='home-image' id='home-image-2'/>
            </div>
            
            <div className='col-5 align-self-center custom-card'>
                <div className=' m-2 p-2 col' id='home-card-2'>
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
            </div>

        </div>

        <div className='row m-2 p-2 justify-content-evenly'> 
            
            <div className='col-5 align-self-center'>
                <div className='m-2 p-2 custom-card' id='home-card-3'>
                    <h1> Choose a category </h1>
                    <div className='btn-group-vertical btn-group-lg co-4' role='group'>
                        <button type='button' className='btn-custom m-2 p-2'>
                            Euro
                        </button>
                        <button type='button' className='btn-custom m-2 p-2'>
                            JDM
                        </button>
                        <button type='button' className='btn-custom m-2 p-2'>
                            Domestic
                        </button>
                        <button type='button' className='btn-custom m-2 p-2'>
                            Trucks
                        </button>
                        <button type='button' className='btn-custom m-2 p-2'>
                            4x4's
                        </button>
                    </div>
                </div>
            </div>

            <div className='m-2 p-2 custom-card image-card col-4' id='home-image-card-3'>
                <img src={home3} alt='' className='home-image' id='home-image-3' />
            </div>
        </div>
        

    </div>   
  )
}

export default Home