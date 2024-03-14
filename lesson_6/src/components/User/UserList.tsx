import { useGetUsers } from '@/hooks/useGetUsers';
import React from 'react'
import UserCard from './UserCard';
import { UseQueryResult } from '@tanstack/react-query';
import { TUser } from '@/models/User';

type UserListProps = {
  isEnabled: boolean;
  query: UseQueryResult<TUser[], Error>;
}

export const UserList: React.FC<UserListProps> = ({ isEnabled, query }) => {
  const { status, data, error } = query;
  return (
    <>
      {isEnabled && status === "pending" && <div>Loading...</div>}
      {status === "error" && <div>Error: {error.message}</div>}
      {status === "success" && (
        <div className='mt-4'>
          {data?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  )
}
