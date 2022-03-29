import React from 'react'

function AddCarPage({handleSubmit, handleChange, formState}) {
  return (
    <div>
        <form className='custom-card m-4 p-3 row' id='addForm' onSubmit={handleSubmit}>
        
        <div className="m-2 p-2">
            <label htmlFor="makeInput" className="form-label">Image URL</label>
            <input 
                type="text" 
                className="form-control" 
                id="imageInput" 
                placeholder='Please enter a url to an image'
                value={formState.image}
                onChange={handleChange}
                name='image'
                /> 
        </div>
        
        <div className="m-2 p-2">
            <label htmlFor="makeInput" className="form-label">Make</label>
            <input 
                type="text" 
                className="form-control" 
                id="makeInput" 
                placeholder='Make'
                value={formState.make}
                onChange={handleChange}
                name='make'
                /> 
        </div>
        
        <div className="m-2 p-2">
            <label htmlFor="modelInput" className="form-label">Model</label>
            <input 
                type="text" 
                className="form-control" 
                id="modelInput" 
                placeholder='Model'
                value={formState.model}
                onChange={handleChange}
                name='model'
                /> 
        </div>
        
        <div className="m-2 p-2">
            <label htmlFor="modelInput" className="form-label">Year</label>
            <input 
                type="number" 
                className="form-control" 
                id="yearInput" 
                placeholder='Year'
                value={formState.year}
                onChange={handleChange}
                name='year'
                /> 
        </div>

        <div className="m-2 p-2">
            <label htmlFor="modelInput" className="form-label">Instagram</label>
            <input 
                type="text" 
                className="form-control" 
                id="igInput" 
                placeholder='Instagram'
                value={formState.instagram}
                onChange={handleChange}
                name='instagram'
                /> 
        </div>

        <div className="m-2 p-2">
            <label htmlFor="modelInput" className="form-label">About</label>
            <textarea  
                className="form-control" 
                id="aboutInput" 
                placeholder='Info on car'
                value={formState.info}
                onChange={handleChange}
                name='info'
                /> 
        </div>
        <div className='m-2 p-2'>
            <label htmlFor='categoryInput' className='form-label'>Category</label>
            <select
                className='form-control'
                id='categoryInput'
                value={formState.category}
                onChange={handleChange}
                name='category'>
                    <option value='Euro'> European </option>
                    <option value='JDM'> Japanese </option>
                    <option value='Domestic'> Domestic </option>

            </select>
        </div>
        <button type='submit' className='m-2 p-2 btn-custom'> Park Car </button>
        </form>
    </div>
  )
}

export default AddCarPage