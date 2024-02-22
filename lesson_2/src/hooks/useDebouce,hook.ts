import React from "react";
import { debounce } from "../utils/debounce";

type useDebounceProps = {
  initialValue?: string,
  delay?: number
}

export const useDebounce = ({ initialValue = "", delay = 300 }: useDebounceProps) => {
  const [value, setValue] = React.useState(initialValue);
  const [debouncedValue, setDebouncedValue] = React.useState(initialValue);

  const debouncedSetValue = React.useCallback(
    debounce((value: string) => {
      setDebouncedValue(value);
    }, delay), 
  []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedSetValue(e.target.value);
  }

  return { value, debouncedValue, handleOnChange }
}