import React from 'react'

function AddCarPage() {
  return (
    <div>
        <form className='custom-card' id='addForm'>
        
        <div class="m-2 p-2">
            <label htmlFor="makeInput" className="form-label">Image URL</label>
            <input type="text" class="form-control" id="imageInput" /> 
        </div>
        
        <div class="m-2 p-2">
            <label htmlFor="makeInput" className="form-label">Make</label>
            <input type="text" class="form-control" id="makeInput" /> 
        </div>
        
        <div class="m-2 p-2">
            <label htmlFor="modelInput" className="form-label">Model</label>
            <input type="text" class="form-control" id="modelInput" /> 
        </div>
        
        <div class="m-2 p-2">
            <label htmlFor="modelInput" className="form-label">Year</label>
            <input type="text" class="form-control" id="yearInput" /> 
        </div>

        <div class="m-2 p-2">
            <label htmlFor="modelInput" className="form-label">Instagram</label>
            <input type="text" class="form-control" id="igInput" /> 
        </div>

        <div class="m-2 p-2">
            <label htmlFor="modelInput" className="form-label">About</label>
            <textarea  class="form-control" id="aboutInput" /> 
        </div>
        <button className='m-2 p-2 btn-custom'>Submit</button>
        </form>
    </div>
  )
}

export default AddCarPage