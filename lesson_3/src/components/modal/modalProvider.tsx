import React from 'react'
import { ModalContext } from '../../context/modalContext'

type TModalProvider = {
  children: React.ReactNode
}

export const ModalProvider: React.FC<TModalProvider> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <ModalContext.Provider value={{isOpen, closeModal, openModal}}>
      {children}
    </ModalContext.Provider>
  )
}
