import React, { useState } from 'react'
import UserSearch from './UserSearch';
import { TUser } from '../models/User';
import useDebounce from '../hooks/useDebounce.hook';

type UserListProps = {
  users: TUser[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [ visibility, setVisibility ] = useState(false);
  const {search, debouncedSearch, handleOnChange} = useDebounce();

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || user.email.toLowerCase().includes(debouncedSearch.toLowerCase());
  })


  const userListVisibility = visibility ? 'visible' : 'hidden';

  return (
    <div className='userList'>
      <UserSearch
        value={search} 
        onChange={(e) => {
          setVisibility(!!e.target.value)
          handleOnChange(e);
        }}
      />
      <div style={{visibility: userListVisibility}}>
        {filteredUsers.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList