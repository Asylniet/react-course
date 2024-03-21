import { TPost } from '../../models/Post';
import { UseQueryResult } from '@tanstack/react-query';
import React from 'react'
import { PostCard } from './PostCard';

type PostListProps = {
  isEnabled: boolean;
  query: UseQueryResult<TPost[], Error>;
}

export const PostList: React.FC<PostListProps> = ({ isEnabled, query }) => {
  const { data, status, error } = query;
  return (
    <>
      {isEnabled && status === "pending" && <div>Loading...</div>}
      {status === "error" && <div>Error: {error.message}</div>}
      {status === "success" && (
        <div className='mt-4'>
          {data?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  )
}