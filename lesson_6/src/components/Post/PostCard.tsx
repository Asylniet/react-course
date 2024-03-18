import { TPost } from '@/models/Post';
import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

type PostCardProps = {
  post: TPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className='border p-3 flex flex-col items-start justify-center gap-1 w-fit mx-auto my-2' key={post.id}>
      <p className='font-bold text-xl'>{post.title}</p>
      <p>{post.body}</p>
      <Button variant="ghost" className='mt-2' asChild>
        <Link to={`/post/${post.id}`}>
          Read More
        </Link>
      </Button>
    </div>
  )
}
