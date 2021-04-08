import React from 'react'
import styled from 'styled-components'
import { Color } from '../../styles/Color'
export interface ButtonProps{
  label?: string
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  buttonColor?: 'primary' | 'error' | 'success' | 'dark'
  radius?: boolean
}

const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  color: ${Color.white};
  background-color: ${Color.black};
  box-shadow: 0px 10px 50px ${Color.black};
  padding: 10px 30px;
  &.is-radius {
    border-radius: 30px;
  }
  &.is-primary {
    background-color: ${Color.primary};
    box-shadow: 0px 10px 50px ${Color.primary};
  }
  &.is-error {
    background-color: ${Color.error};
    box-shadow: 0px 10px 50px ${Color.error};
  }
  &.is-success {
    background-color: ${Color.success};
    box-shadow: 0px 10px 50px ${Color.success};
  }
  &.is-dark {
    background-color: ${Color.dark};
    box-shadow: 0px 10px 50px  ${Color.dark};
  }
`

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  buttonColor,
  radius
}) => {
  return (
    <Btn 
      className={[`is-${buttonColor}`, radius? 'is-radius': ''].join(' ')}
      onClick={onClick}>
    {label}</Btn>
  )
}

export default Button