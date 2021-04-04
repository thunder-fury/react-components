import React from 'react'
import styled from 'styled-components'
export interface ButtonProps{
  label?: string
  backgroundColor?: string
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Btn = styled.button<ButtonProps>`
  background-color: #000;
`

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick
}) => {
  return (
    <Btn onClick={onClick}>{label}</Btn>
  )
}

export default Button