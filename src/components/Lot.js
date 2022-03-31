import { useState } from 'react'
import React from 'react'
import CarCard from './CarCard'
import Form from './Form'

function Lot({ lot, showDetail, clearFilter, goToCategory, handleSubmit, handleChange, formState, isFiltered }) {
  const [showForm, setShowForm] = useState(false)
  const [showFilters, setShowfilters] = useState(false)


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

function handleShowForm(){
  setShowForm(!showForm)
}

function handleShowFilters(){
  setShowfilters(!showFilters)
}
  

  return (
   
        <div className=' row content m-2 p-2 justify-content-center align-self-center d-flex'>
            
            <div className='row m-2 p-2 justify-content-center'>
              <button type='button' onClick={handleShowFilters} className='btn-custom m-2 p-2 col-2' >
                {showFilters ? 'hide filters' : 'show filters' }
              </button>
              
              <button type='button' onClick={handleShowForm} className={showFilters ? 'hide' : 'btn-custom m-2 p-2 col-2'}>
                add your car
              </button>
              </div>





            <div className={showFilters ? 'custom-card col-4' : 'hide'}>
              <div  id='button-group' className='btn-group-vertical btn-group-lg col-4' role='group'>
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

              <div className='row justify-content-center'>
                <hr className='m-2 col-5' id='lothr'/>
              </div>
              
              <div className='row justify-content-center'>
              <button type='button' onClick={isFiltered ? handleClearFilter : null} className='btn-custom m-2 p-2 col-2' >
                Clear Filters
              </button>
              
              <button type='button' onClick={handleShowForm} className='btn-custom m-2 p-2 col-2' >
                {showForm ? 'hide form' : 'add your car'}
              </button>
              </div>
            </div>
            
            <div className='row justify-content-center'>
            <div className={ showForm ? ' col-11 justify-content-center' : 'hide'}>
              <Form handleSubmit={handleSubmit} handleChange={handleChange} formState={formState}/>
            </div>
            </div>
            
            {cars}
            
    

            <div className='row justify-content-center'>
              <a className='btn-custom to-top m-5 p-2 col-1' href='#navbar'>Back To Top</a>
            </div>
        </div>
    
  )
}

export default Lot




/* <div className='modal' id='formModal' tabIndex='-1' aria-labelledby='formModalLabel' aria-hidden='true'>
<div className='modal-dialog'>
  <div className='modal-content'>
    <div className='modal-header'>
      <h5 className='modal-title' id='formModalLabel'> Park Your Car </h5>
      <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'></button>
    </div>
    <div className='modal-body'>

    </div>
    <div className='modal-footer'>
      <button className='btn-custom' type='button' data-bs-dismiss='modal' aria-label='close' >Close</button>
    </div>
  </div>
</div>
</div> */