import React from 'react';  
import './App.css';
import { ModalProvider } from './components/modal/modalProvider';
import { ModalTrigger } from './components/modal/modalTrigger';

// 1. Make focus to work
// 2. On clicking on button Register log out Values of form
// 3. Maintain good folder structure

function App() {
  return (
    <>
      <ModalProvider>
        <main>
          <ModalTrigger />
        </main>
      </ModalProvider>
    </>
  );
}

export default App;
