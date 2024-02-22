import React from 'react'
import UserSearch from './UserSearch';
import { TUser } from '../models/User';
import useDebounce from '../hooks/useDebounce.hook';

type UserListProps = {
  users: TUser[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const {search, debouncedSearch, handleOnChange} = useDebounce();

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || user.email.toLowerCase().includes(debouncedSearch.toLowerCase());
  })

  // onChange - search => input value => 300ms => debouncedSearch => filteredUsers => render
  return (
    <div>
      <UserSearch 
        value={search} 
        onChange={handleOnChange}
      />
      {filteredUsers.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  )
}

export default UserList