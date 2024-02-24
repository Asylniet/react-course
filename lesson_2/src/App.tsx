import './App.css';
import React, { useState } from 'react';
import { ThemeButton } from './components/ThemeButton';
import UserList from './components/UserList';
import { useGetUsers } from './hooks/useGetUsers.hook';
import { ThemeProvider } from './components/context/ThemeProvider';
import { Form } from './components/From';
 
function App() {
  const users = useGetUsers();
  const [email, password] = useState("");  

  const handleSubmit = () => {
    console.log("Form submitted:", { email, password });
  }

  return (
    <ThemeProvider initialTheme="light"> 
      <ThemeButton />
      <UserList users={users} />
      <Form onSubmit={handleSubmit}/>
    </ThemeProvider>
  );
}

export default App;
