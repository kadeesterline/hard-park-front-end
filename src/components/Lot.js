import React from 'react'
import CarCard from './CarCard'

function Lot({ lot, showDetail, clearFilter, goToCategory }) {

  const cars = lot.map((carObj)=> (
    <CarCard 
      key={carObj.model + carObj.id}
      car={carObj}
      showDetail={showDetail}
    />
  ))

  function handleClearFilter(){
    
    clearFilter()
  }

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
   
        <div className=' row content m-2 p-2 justify-content-center align-self-center d-flex'>
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
            <button onClick={handleClearFilter} className='btn-custom m-2 p-2 col-2' >Clear Filters</button>
            {cars}
            
        </div>
    
  )
}

export default Lot