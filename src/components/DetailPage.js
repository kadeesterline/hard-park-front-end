import React from 'react'
import { useState } from 'react'

import CommentBox from './CommentBox'
import CommentCard from './CommentCard'

import like from '../hard-park-photos/like.png'
import liked from '../hard-park-photos/like (1).png'
import comment from '../hard-park-photos/comment.png'

function DetailPage( { car, deleteCar, commentBoxState, setCommentBoxState, handleNewComment, handleCommentBoxChange }) {
  const [isLiked, setIsLiked] = useState(false)
  const [showCommentBox, setShowCommentBox] = useState(false)

  const comments = car.comments?.map((comment)=> (
    <CommentCard
      key={comment.id + comment.user_name}
      content={comment.content}
      user={comment.user_name}
    />
  ))
  
  
  
  function handleDelete(){
    
    deleteCar(car)
  }

  function handleLikeClick(){
    
    setIsLiked(!isLiked)
  }

  function handleShowCommentBox() {
    setShowCommentBox(!showCommentBox)
  }


  return (
    <div className=' row  justify-content-center m-2 p-2'>
        <img src={car.image_url} className=" justify-content-center detail-image card-img-top mt-1 pt-1 col-6" alt="..."></img>
        <div className='col-6 m-2 p-2 '>
            
            <div className='custom-card'>
              <h4 className='detail-title m-2 p-2'> {car.year} {car.make} {car.model} </h4>
              
              <h6 className='text-muted p-2'>@{car.instagram}</h6>
              <p className='detail-body m-2 p-2'>
                  {car.info}
              </p>
              <img className='small-button m-2' alt='like-button' onClick={handleLikeClick} src={isLiked ? liked : like} ></img>
              <img className='small-button m-2' alt='comment-button' onClick={handleShowCommentBox}  src={comment} ></img>
            </div>

            <div className='col'>
              {
                showCommentBox ? <CommentBox handleNewComment={handleNewComment} commentBoxState={commentBoxState} setCommentBoxState={setCommentBoxState} handleCommentBoxChange={handleCommentBoxChange}/> : null
              }
              {comments}

            </div>
            <div className='row justify-content-evenly mt-5 p-2'>
              <button onClick={handleDelete}  className=' col-1 btn-custom remove-button mb-5'>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default DetailPage