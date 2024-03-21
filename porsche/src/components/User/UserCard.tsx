import { TUser } from '../../models/User';
import React from 'react'

type UserCardProps = {
  user: TUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className='border p-3 flex flex-col items-center justify-center gap-1 w-fit mx-auto my-2' key={user.id}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  )
}

export default UserCard