import React from 'react'

function DetailPage( { car, deleteCar }) {

  function handleDelete(){
    console.log('handle delete function')
    deleteCar(car)
  }


  return (
    <div className=' row  justify-content-center m-2 p-2'>
        <img src={car.image_url} className=" justify-content-center detail-image card-img-top mt-1 pt-1 col-6" alt="..."></img>
        <div className='col-6 m-2 p-2 '>
            <h4>{car.make} {car.model} {car.year}</h4>
            <h6 className='text-muted'>{car.instagram}</h6>
            <p>
                {car.info}
            </p>
            <button onClick={handleDelete}  className='btn-custom'>Remove</button>
        </div>
    </div>
  )
}

export default DetailPage