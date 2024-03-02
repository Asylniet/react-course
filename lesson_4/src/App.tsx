import React from 'react';
import './App.css';
import { UserList } from './components/UserList';
import { getUsers } from './services/api/user';
import { TUser } from './models/User';

function App() {
  const [users, setUsers] = React.useState<TUser[]>([]);

  React.useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
