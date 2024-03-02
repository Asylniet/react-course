import React from 'react'
import { TUser } from '../models/User'

type UserCardProps = {
  user: TUser;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  if(user.name === "Leanne Graham") console.log(user);
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.phone}</p>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.company.name}</p>
      <p>{user.address.street}</p>
      <p>{user.address.suite}</p>
      <p>{user.address.city}</p>
      <p>{user.address.zipcode}</p>
      <hr />
    </div>
  )
}

