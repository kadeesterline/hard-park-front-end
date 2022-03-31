import React from 'react'
import Form from './Form'

function AddCarPage({handleSubmit, handleChange, formState}) {
  return (
    <div>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} formState={formState}/>
    </div>
  )
}

export default AddCarPage