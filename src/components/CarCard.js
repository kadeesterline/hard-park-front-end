import React from 'react'


function CarCard({ car, showDetail }) {

  function handleCarClick(){ 
    
    showDetail(car)
  }
  


  return (
     
            
                <div className='row content m-2 p-2 justify-content-center align-self-center d-flex'>
                    <div className=" card car-card row content m-2 p-2 justify-content-center align-self-center d-flex border-none">
                        <img src={car.image_url} className=" justify-content-center card-img-top mt-1 pt-1" alt="..."></img>
                            <div className="card-body">
                                <h5 className='card-title '> {car.make} {car.model} {car.year} </h5>
                                <h6 className='card-subtitle m-2 text-muted'> {car.instagram} </h6>
                                <p className="card-text"> {car.info} </p>
                                <div className='row justify-content-center' id='buttonrow'>
                                 
                                  <button onClick={handleCarClick} className='btn-custom col-2 m-2 p-2'> See More </button>
                                </div>
                            </div>
                    </div>
                  </div>   
                    
               
            
        
  )
}

export default CarCard

/*card custom-card d-flex car-card col-4 justify-content-center  pb-3 mb-3 border-none rounded-2 shadow*/