import './App.css';
import React from 'react';
import { ThemeButton } from './components/ThemeButton';
import UserList from './components/UserList';
import { useGetUsers } from './hooks/useGetUsers.hook';
import { ThemeProvider } from './components/context/ThemeProvider';
 
function App() {
  const users = useGetUsers();

  return (
    <ThemeProvider initialTheme="light"> 
      <ThemeButton />
      <UserList users={users} />
    </ThemeProvider>
  );
}

export default App;
