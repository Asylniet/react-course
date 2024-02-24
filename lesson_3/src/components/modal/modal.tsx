import React from 'react'
import { useModalContext } from '../../hooks/useModalContext'
import { CloseIcon } from '../svg/close'

type TModal = {
  children: React.ReactNode
}

export const Modal: React.FC<TModal> = ({ children }) => {
  const { isOpen, closeModal } = useModalContext()
  return (
    <div className={`modal-wrapper ${isOpen ? "visible" : "invisible"}`}>
      <div className="modal-overlay" onClick={closeModal} />
      <div className="modal-content">
        <div className="close-modal" onClick={closeModal}>
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  )
}
