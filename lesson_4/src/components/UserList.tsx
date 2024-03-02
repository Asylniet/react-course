import React from 'react'
import { TUser } from '../models/User'
import { UserCard } from './UserCard';

type UserListProps = {
  users: TUser[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <>
     {users.map((user, index) => (
      <UserCard key={index} user={user} />
     ))} 
    </>
  )
}
