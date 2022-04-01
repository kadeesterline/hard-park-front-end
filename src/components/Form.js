import React from 'react'

function Form( {handleSubmit, handleChange, formState} ) {
  
    return (
        <div className='col m-2 p-2'>
    <form className=' custom-card m-4 p-3 row ' autoComplete='off' id='addForm' onSubmit={handleSubmit}>
        
        <div className=" row justify-content-center">
            <div className='col'>
            <label htmlFor="makeInput" className="form-label">Image</label>
            <input 
                type="text" 
                placeholder='Image url'
                className="form-control" 
                id="imageInput" 
                //accept='image/*'
                value={formState.image}
                onChange={handleChange}
                name='image'
                /> 
                </div>
        </div>
        
        <div className='row justify-content-evenly '>
            <div className=" m-2 p-2 col-3">
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
            
            <div className="m-2 p-2 col-3">
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
            
            <div className="m-2 p-2 col-3">
                <label htmlFor="modelInput" className="form-label">Year</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="yearInput" 
                    
                    value={formState.year}
                    onChange={handleChange}
                    name='year'
                    /> 
            </div>

          

        </div>

    <div className='row justify-content-evenly'>
        <div className='m-2 p-2 col-5'>
                <label htmlFor='categoryInput' className='form-label'>Category</label>
                <select
                    className='form-control'
                    id='categoryInput'
                    value={formState.category}
                    onChange={handleChange}
                    name='category'>
                        <option className='text-muted' value='none'> Choose a category...</option>
                        <option value='Euro'> European </option>
                        <option value='JDM'> Japanese </option>
                        <option value='Domestic'> Domestic </option>

                </select>
            </div>

        <div className="m-2 p-2 col-5">
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
    </div>

        <div className='row'>

        <div className="  col">
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

        </div>
        
        <div className='row'>
        <div className='col justify-content-center'>
            <button type='submit' className='m-2 p-2 btn-custom col-1'> Park Car </button>
        </div>
        </div>

        </form>
        </div>
  )
}

export default Form