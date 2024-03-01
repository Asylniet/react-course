import React from 'react';  
import './App.css';
import { ModalProvider } from './components/modal/modalProvider';
import { ModalTrigger } from './components/modal/modalTrigger';

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
