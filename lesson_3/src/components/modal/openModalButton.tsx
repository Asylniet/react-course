import React from 'react'
import Button from '../button'
import { useModalContext } from '../../hooks/useModalContext'

export const OpenModalButton = () => {
  const { openModal } = useModalContext()
  return (
    <Button onClick={openModal}>
      Register
    </Button>
  )
}
