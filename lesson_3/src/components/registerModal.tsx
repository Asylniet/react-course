import React from 'react'
import { Modal } from './modal/modal'

export const RegisterModal = () => {
  return (
    <div>
      <Modal>
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      </Modal>
    </div>
  )
}
