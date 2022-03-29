import React from 'react'
import CarCard from './CarCard'

function Lot({ lot, showDetail }) {

  const cars = lot.map((carObj)=> (
    <CarCard 
      key={carObj.model + carObj.id}
      car={carObj}
      showDetail={showDetail}
    />
  ))

  return (
   
        <div className=' row content m-2 p-2 justify-content-center align-self-center d-flex'>
            {cars}
            
        </div>
    
  )
}

export default Lot