import React from 'react'
import { useParams } from 'react-router-dom'
import { users } from '../data/users';

export const UserPage = () => {
  const { id } = useParams();
  if(!id) return null;

  const currentUser = users.find((user) => user.id === +id);
  if(!currentUser) throw new Error("User not found");
  return (
    <div>
      {currentUser?.name}
    </div>
  )
}
