import React from 'react'
import { Link } from 'react-router-dom'
import { useGetUsers } from './useGetUsers';

export const HomePage = () => {
  // const { status, data, error } = useGetUsers();
  return (
    <div>
      {/* {status === "pending" && <div>Loading...</div>}
      {status === "error" && <div>{error.message}</div>}
      {status === "success" && (
        <div>
          <h1>Home</h1>
          <ul>
            {data.map((user) => (
              <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  )
}
