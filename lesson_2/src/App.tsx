import './App.css';
import UserList from './components/UserList';
import { useGetUsers } from './hooks/useGetUsers.hook';

function App() {
  const users = useGetUsers();
  return <UserList users={users} />
}

export default App;
