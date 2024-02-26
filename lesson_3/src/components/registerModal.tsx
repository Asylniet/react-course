import React from 'react'
import { Modal } from './modal/modal'

type RegisterModalProps = {
  firstInputRef: React.RefObject<HTMLInputElement>;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ firstInputRef }) => {
  return (
    <div>
      <Modal>
        <h1 onClick={() => firstInputRef.current?.focus()}>Register</h1>
        <form>
          <input onFocus={() => console.log("FOCUSED")} ref={firstInputRef} type="text" placeholder="Username" autoComplete='username' />
          <input type="password" placeholder="Password" autoComplete="current-password" />
          <button type="submit">Register</button>
        </form>
      </Modal>
    </div>
  )
}
