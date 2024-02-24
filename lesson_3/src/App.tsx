import React from 'react';
import './App.css';
import { ModalProvider } from './components/modal/modalProvider';
import { OpenModalButton } from './components/modal/openModalButton';
import { RegisterModal } from './components/registerModal';
import Button from './components/button';

function App() {
  const [counter, setCounter] = React.useState(0);
  const ref = React.useRef(0);
  const handleClick = () => {
    // setCounter(counter + 1);
    ref.current = ref.current + 1;
    // console.log(counter);
    console.log(ref.current);
  }
  return (
    <>
      <ModalProvider>
        <Button onClick={handleClick}>
          {counter}
        </Button>
        REF: {ref.current}
        <main>
          <OpenModalButton />
          <RegisterModal />
        </main>
      </ModalProvider>
    </>
  );
}

export default App;
