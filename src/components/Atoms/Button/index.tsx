import React from 'react'
import styled from 'styled-components'
import { Color } from '../../../styles/common/Color'
export interface Props{
  label?: string
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  thema?: 'primary' | 'error' | 'success' | 'dark'
  radius?: boolean
  shadow?:boolean
  fontColor?:string
}
export const Button: React.FC<Props> = ({
  label,
  onClick,
  thema,
  radius,
  shadow,
  fontColor
}) => {
  return (
    <Btn
      fontColor={fontColor}
      className={[
        `is-${thema}`, radius? 'is-radius': '',
        shadow? 'is-shadow' : ''
      ].join(' ')}
      onClick={onClick}>{label ? label: `Button`}</Btn>
  )
}

const Btn = styled.button<{ fontColor?: string}>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  ${(Props) => Props.fontColor ? `color: ${Props.fontColor};`: `color: ${Color.white};`}
  background-color: ${Color.black};
  &.is-shadow {
    box-shadow: 0px 10px 50px ${Color.black};
  }
  padding: 10px 15px;
  &.is-radius {
    border-radius: 30px;
  }
  &.is-primary {
    background-color: ${Color.primary};
    &.is-shadow {
      box-shadow: 0px 10px 50px ${Color.primary};
    }
  }
  &.is-error {
    background-color: ${Color.error};
    &.is-shadow {
      box-shadow: 0px 10px 50px ${Color.error};
    }
  }
  &.is-success {
    background-color: ${Color.success};
    &.is-shadow {
      box-shadow: 0px 10px 50px ${Color.success};
    }
  }
  &.is-dark {
    background-color: ${Color.dark};
    &.is-shadow {
      box-shadow: 0px 10px 50px  ${Color.dark};
    }
  }
`

export default Button
