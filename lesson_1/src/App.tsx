import { useState } from 'react';
import './App.css';
import Button from './button';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <span>{counter}</span> <br />
      <Button onClick={() => setCounter(counter + 1)} />
    </div>
  );
}

export default App;
