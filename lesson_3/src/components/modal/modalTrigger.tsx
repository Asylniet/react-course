import React from 'react'
import Button from '../ui/button'
import { useModalContext } from '../../hooks/useModalContext';
import { RegisterModal } from '../auth/registerModal';

export const ModalTrigger = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { openModal } = useModalContext();

  React.useEffect(() => {
    if(inputRef.current){
      inputRef.current.focus();
    }
  }, [openModal])

  const handleClick = () => {
    openModal();
  }
  return (
    <>
      <Button onClick={handleClick}>
        Register
      </Button>
      <RegisterModal firstInputRef={inputRef}/>
    </>
  )
}

