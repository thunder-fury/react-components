import React from "react"
import { ButtonProps } from './interface'

export const Button: React.FC<ButtonProps> = ({
  txt,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
    >{txt}</button>
  )
}

export default Button