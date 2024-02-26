import React from 'react'
import Button from '../button'
import { RegisterModal } from '../registerModal'
import { useModalContext } from '../../hooks/useModalContext';

export const ModalTrigger = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { openModal } = useModalContext();
  const handleClick = () => {
    openModal();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500) // костыль
  }
  return (
    <>
      <Button onClick={handleClick}>
        Register
      </Button>
      <RegisterModal firstInputRef={inputRef} />
    </>
  )
}

