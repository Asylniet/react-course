import { isNumber } from '../../../lib/isNumber';
import { useGetPost } from '../../../hooks/useGetPost';
import { Link, useParams } from 'react-router-dom';
import { useGetComment } from '../../../hooks/useGetComment';

export const PostPage = () => {
  const { id } = useParams();
  const isCorrectId = isNumber(id);
  const { data, status, error } = useGetPost(+id!, isCorrectId);
  const { data: commentData} = useGetComment(+id!);
  if(!isCorrectId) return <div>Id is not valid</div>;

  if(!id) return <div>Something went wrong</div>;
  return (
    <>
      {status === "pending" && <div>Loading...</div>}
      {status === "error" && <div>Error: {error.message}</div>}
      {status === "success" && (
        <div className='p-1'>
          <button type='submit'>
            <Link to='/api'>
              Back
            </Link>
          </button>
          <h1 className='font-bold text-xl my-2'>{data?.title}</h1>
          <p>{data?.body}</p>
          <h2>Comments:</h2>
                <ul>
                    {commentData?.map((comment) => (
                        <li key={comment.id}>
                            <h1 className='font-bold text-xl my-2'>commentId: {comment.id} ,commentName: {comment.name}, commentEmail: {comment.email}</h1>

                            <p>{comment.body}</p>
                        </li>
                    ))}
                </ul>
        </div>
      )}
    </>
  )
}