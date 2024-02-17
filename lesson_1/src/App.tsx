import React from 'react';
import './App.css';
import Form from './Form';
import Button from './button';
import { useCounter } from './useCounter.hook';

function App() {
  const { counter, increment, decrement, canAdd, canSubstract } = useCounter();
  
  const [isFormVisible, setIsFormVisible] = React.useState(false);

  return (
    <div>
      <span>{counter}</span> <br />
      <Button onClick={increment} variant='success' disabled={!canAdd}>
        Add
      </Button>
      <Button onClick={decrement} disabled={!canSubstract}>
        Substract
      </Button>
      <br />
      <Button onClick={() => setIsFormVisible(!isFormVisible)}>
        Toggle form
      </Button>

      <Form isFormVisible={isFormVisible} />
      {/* {isFormVisible && <Form />} */}
    </div>
  );
}

export default App;
