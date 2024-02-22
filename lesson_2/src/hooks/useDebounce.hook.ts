import { useState, useCallback } from 'react';
import { debounce } from '../utils/debounce';

const useDebounce = () => {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const debouncedSetSearch = useCallback(
    debounce((value: string) => {
      setDebouncedSearch(value);
    }, 300), 
  []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedSetSearch(e.target.value);
  }

  return { search, debouncedSearch, handleOnChange };
};

export default useDebounce;
