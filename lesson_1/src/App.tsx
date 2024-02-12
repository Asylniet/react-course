import './App.css';
import Button from './button';
import { useCounter } from './useCounter.hook';

function App() {
  const { counter, increment, decrement, canAdd, canSubstract } = useCounter();
  return (
    <div>
      <span>{counter}</span> <br />
      <Button onClick={increment} variant='success' disabled={!canAdd}>
        Add
      </Button>
      <Button onClick={decrement} disabled={!canSubstract}>
        Substract
      </Button>
    </div>
  );
}

export default App;
