import React from 'react'
import '../styles/index.css'
import home1 from '../hard-park-photos/IMG_5168.jpg'
import home2 from '../hard-park-photos/IMG_7082.jpg'
import home3 from '../hard-park-photos/IMG_6356.JPG'

function Home({ goToCategory }) {

    function goToEuro(){
        goToCategory(1)
    }

    function goToJDM(){
        goToCategory(2)
    }

    function goToDomestic(){
        goToCategory(3)
    }

  return (
    <div id ='homepage' className='container-fluid'>
       
        <div className='row m-2  p-2 justify-content-evenly '>
            <div className='col-5 custom-card card  align-self-center' >
                <div id='def' className=' m-2 p-2 col'>
                    <h1 id='card-1-h1' className='m-2 p-2 underline-text'>HARD PARK</h1>
                    <h3 id='card-1-h3'className='text-muted m-2 p-2'> A CAR MEET FOR THE INTERNET</h3>
                    <h4 className='m-2 p-2'>  </h4>
                    <h5> </h5>
                    <h5> </h5>
                    <h6 className='text-muted'>
                        
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
                        Park your car, check out others
                    </h3>
                    <h4 className='m-2 p-2 text-muted'>
                        Euro, JDM, Domestic
                    </h4>
                    <h5 className='m-2 p-2 '> <span className='highlight-span'>It doesn't matter what you drive, or what you do with it</span></h5>
                    
                    
                </div>
            </div>

        </div>

        <div className='row m-2 p-2 justify-content-evenly'> 
            
            <div className='col-5 align-self-center'>
                <div className='m-2 p-2 custom-card' id='home-card-3'>
                    <h1 className='underline-text'> Choose a category </h1>
                    <div  id='button-group' className='btn-group-vertical btn-group-lg co-4' role='group'>
                        <button type='button' onClick={goToEuro} className='btn-custom m-2 p-2'>
                            Euro
                        </button>
                        <button type='button' onClick={goToJDM} className='btn-custom m-2 p-2'>
                            JDM
                        </button>
                        <button type='button' onClick={goToDomestic} className='btn-custom m-2 p-2'>
                            Domestic
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