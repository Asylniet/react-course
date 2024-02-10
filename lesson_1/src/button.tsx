import React, { FC } from 'react'

type ButtonProps = {
  onClick: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ onClick, className }) => {
  return (
    <button onClick={onClick}>
      CLICK
    </button>
  )
}

export default Button
