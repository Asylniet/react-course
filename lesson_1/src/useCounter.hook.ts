import React from "react";

export const useCounter = () => {
  const [counter, setCounter] = React.useState(0);

  const canAdd = counter < 10;
  const canSubstract = counter > 0;

  const increment = () => {
    if(canAdd) setCounter(counter + 1);
  }

  const decrement = () => {
    if(canSubstract) setCounter(counter - 1);
  }


  return { counter, increment, decrement, canAdd, canSubstract }
  // {
  //   counter: counter,
  //   increment: increment
  // }
}