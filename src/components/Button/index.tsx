import React from 'react'
import styled from 'styled-components'
import { Color } from '../../styles/Color'
export interface ButtonProps{
  label?: string
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  btnColor?: 'primary' | 'error' | 'success' | 'dark'
}

const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  &.is-primary {
    background-color: ${Color.primary};
  }
  &.is-error {
    background-color: ${Color.error};
  }
  &.is-success {
    background-color: ${Color.success};
  }
  &.is-dark {
    background-color: ${Color.dark};
  }
`

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  btnColor
}) => {
  return (
    <Btn 
      className={[`.is-${btnColor}`].join(' ')}
      onClick={onClick}>
    {label}</Btn>
  )
}

export default Button