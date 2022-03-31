import React from 'react'

function CommentCard({ content, user}) {
  return (
    <div className='row m-2 p-2 justify-content-center'>
    <div className='card m-3 p-2 custom-card comment-border col'>
        <h6 className='text-muted'>
            @{user}
        </h6>
        <h5>
            {content}
        </h5>
    </div>
    </div>
  )
}

export default CommentCard