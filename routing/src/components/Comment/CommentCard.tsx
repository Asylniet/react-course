import { TComment } from '../../models/Comment';
import React from 'react'
import { Link } from 'react-router-dom';

type CommentCardProps = {
  comment: TComment;
}

export const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <div className='border p-3 flex flex-col items-start justify-center gap-1 w-fit mx-auto my-2' key={comment.id}>
      <p className='font-bold text-xl'>{comment.name}</p>
      <p>{comment.body}</p>
      <button type='submit' className='mt-2'>
        {/* <Link to={`/comment/${comment.id}`}>
          Read More
        </Link> */}
      </button>
    </div>
  )
}