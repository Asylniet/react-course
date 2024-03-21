import { UseQueryResult } from '@tanstack/react-query';
import React from 'react'
import { TComment } from '../../models/Comment';
import { CommentCard } from './CommentCard';

type CommentListProps = {
  isEnabled: boolean;
  query: UseQueryResult<TComment[], Error>;
}

export const CommentList: React.FC<CommentListProps> = ({ isEnabled, query }) => {
  const { data, status, error } = query;
  return (
    <>
      {isEnabled && status === "pending" && <div>Loading...</div>}
      {status === "error" && <div>Error: {error.message}</div>}
      {status === "success" && (
        <div className='mt-4'>
          {data?.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </>
  )
}