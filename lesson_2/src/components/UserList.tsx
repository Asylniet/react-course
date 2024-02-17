import React from 'react'
import { useGetUsers } from '../hooks/useGetUsers.hook'
import UserSearch from './UserSearch';

const UserList = () => {
  const users = useGetUsers();
  const [search, setSearch] = React.useState('');

  // React.useEffect(() => {
  //   setUsers(users.filter((user) => {
  //     return user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
  //   }))
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [search]);

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div>
      <UserSearch value={search} onChange={(e) => setSearch(e.target.value)} />
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
