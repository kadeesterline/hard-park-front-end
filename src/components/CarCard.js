import React from 'react'


function CarCard() {
  return (
     
            
                <div className='row content m-2 p-2 justify-content-center align-self-center d-flex'>
                    <div class=" card car-card row content m-2 p-2 justify-content-center align-self-center d-flex border-none">
                        <img src='https://images.unsplash.com/photo-1623006772851-a8bf2c47d304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' class=" justify-content-center card-img-top mt-1 pt-1" alt="..."></img>
                            <div class="card-body">
                                <h5 className='card-title '> 2018 BMW M4 </h5>
                                <h6 className='card-subtitle m-2 text-muted'> @USERNAME </h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='row justify-content-center' id='buttonrow'>
                                  <button className='btn-custom col-2 m-2 p-2'> Like </button>
                                  <button className='btn-custom col-2 m-2 p-2'> See More </button>
                                </div>
                            </div>
                    </div>
                  </div>   
                    
               
            
        
  )
}

export default CarCard

/*card custom-card d-flex car-card col-4 justify-content-center  pb-3 mb-3 border-none rounded-2 shadow*/