import React from 'react'

function CommentBox({ handleNewComment, commentBoxState, setCommentBoxState, handleCommentBoxChange}) {
    
  
  
  return (
    <div className='custom-card m-2 p-2 comment-border'>
        <form autoComplete='off' onSubmit={handleNewComment}>
            <label htmlFor='userInput' className='form-label'>
                User
            </label>
            <input
              type='text'
              className='form-control'
              id='userInput'
              name='user_name'
              placeholder='username...'
              value={commentBoxState.user_name}
              onChange={handleCommentBoxChange}
            />
            <label htmlFor='commentBox' className='form-label col'>
                Comment
            </label>
            <textarea
                className='form-control'
                id='commentBox'
                placeholder='Comment...'
                name='content'
                value={commentBoxState.content}
                onChange={handleCommentBoxChange}
            />

            <button type='submit' className='btn-custom m-2'> Submit Comment </button>
        </form>
    </div>
  )
}

export default CommentBox