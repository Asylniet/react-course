import React from 'react'
import { Modal } from '../modal/modal';
import Form from './Form'

type RegisterModalProps = {
  firstInputRef: React.RefObject<HTMLInputElement>;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ firstInputRef }) => {
  return (
    <div>
      <Modal>
          <h1>Registration</h1>
          <Form firstInputRef={firstInputRef} />
       </Modal>
    </div>
  )
}