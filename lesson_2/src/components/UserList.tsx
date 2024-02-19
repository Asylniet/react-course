import React from 'react'
import UserSearch from './UserSearch';
import { TUser } from '../models/User';
import { debounce } from '../utils/debounce';

type UserListProps = {
  users: TUser[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [search, setSearch] = React.useState('');
  const [debouncedSearch, setDebouncedSearch] = React.useState('');

  const debouncedSetSearch = React.useCallback(
    debounce((value: string) => {
      setDebouncedSearch(value);
    }, 300), 
  []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedSetSearch(e.target.value);
  }

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
