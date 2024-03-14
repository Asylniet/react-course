import React from 'react'
import { UserList } from '../../components/User/UserList';
import { Button } from '../../components/ui/button';
import { useGetUsers } from '../../hooks/useGetUsers';

export const HomePage = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const query = useGetUsers(isEnabled);
  return (
    <div>
      <Button onClick={() => {setIsEnabled(true)}}>
        Fetch Users
      </Button>
      <UserList isEnabled={isEnabled} query={query} />
    </div>
  )
}
