import React from 'react'

function CarCard() {
  return (
    <div className='wrapper'>  
            <div className='container'>
                <div classname='row'>
                    <div class="card col pb-3 mb-3 border-none rounded-2 shadow">
                        <img src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 className='card-title'> 2018 BMW M2 </h5>
                                <h6 className='card-subtitle m-2 text-muted'> @USERNAME </h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
  )
}

export default CarCard