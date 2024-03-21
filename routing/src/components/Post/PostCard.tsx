import { TPost } from '../../models/Post';
import React from 'react'
import { Link } from 'react-router-dom';

type PostCardProps = {
  post: TPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className='border p-3 flex flex-col items-start justify-center gap-1 w-fit mx-auto my-2' key={post.id}>
      <p className='font-bold text-xl'>{post.title}</p>
      <p>{post.body}</p>
      <button type='submit' className='mt-2'>
        <Link to={`/post/${post.id}`}>
          Read More
        </Link>
      </button>
    </div>
  )
}