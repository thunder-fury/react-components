import React from 'react'
export interface ButtonProps{
  label?: string
  backgroundColor?: string
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick
}) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button