import { isNumber } from '../../../lib/isNumber';
import { useGetPost } from '../../../hooks/useGetPost';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';

export const PostPage = () => {
  const { id } = useParams();
  const isCorrectId = isNumber(id);
  const { data, status, error } = useGetPost(+id!, isCorrectId);
  if(!isCorrectId) return <div>Id is not valid</div>;

  if(!id) return <div>Something went wrong</div>;
  return (
    <>
      {status === "pending" && <div>Loading...</div>}
      {status === "error" && <div>Error: {error.message}</div>}
      {status === "success" && (
        <div className='p-1'>
          <Button variant="outline" asChild>
            <Link to='/'>
              <ArrowLeftIcon />
              Back
            </Link>
          </Button>
          <h1 className='font-bold text-xl my-2'>{data?.title}</h1>
          <p>{data?.body}</p>
        </div>
      )}
    </>
  )
}
