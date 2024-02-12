import React, { FC } from 'react'

type ButtonProps = {
  onClick: () => void;
  variant?: keyof typeof buttonVariants;
  children: React.ReactNode;
  disabled?: boolean;
}

const buttonVariants = {
  default: "",
  success: "success-button",
} as const;

const Button: FC<ButtonProps> = ({ onClick, variant = "default", children, disabled }) => {
  return (
    <button className={`button ${buttonVariants[variant]}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
