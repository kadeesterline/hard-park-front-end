import React from 'react'

function DetailPage() {
  return (
    <div className=' row  justify-content-center m-2 p-2'>
        <img src='https://images.unsplash.com/photo-1623006772851-a8bf2c47d304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' class=" justify-content-center detail-image card-img-top mt-1 pt-1 col-6" alt="..."></img>
        <div className='col-6 m-2 p-2 '>
            <h4>MAKE MODEL YEAR</h4>
            <h6 className='text-muted'>INSTAGRAM @</h6>
            <p>
                General information about car, maybe in a list format if I can figure it out?
            </p>
        </div>
    </div>
  )
}

export default DetailPage