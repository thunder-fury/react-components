import React from 'react'
import styled from 'styled-components'
import { Color } from '../../../styles/common/Color'
export interface Props {
  label?: string
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  thema?: 'primary' | 'error' | 'success' | 'dark' | string
  radius?: boolean
  shadow?: boolean
  fontColor?: string
}
export const Button: React.FC<Props> = ({
  label,
  onClick,
  thema,
  radius,
  shadow,
  fontColor,
}) => {
  return (
    <Btn option={{ fontColor, thema, radius, shadow }} onClick={onClick}>
      {label ? label : `Button`}
    </Btn>
  )
}

const Btn = styled.button<{
  option: {
    fontColor?: string
    thema?: 'primary' | 'error' | 'success' | 'dark' | string
    radius?: boolean
    shadow?: boolean
  }
}>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  ${(Props) =>
    Props.option.fontColor
      ? `color: ${Props.option.fontColor};`
      : `color: ${Color.white};`}
  ${(props) =>
    props.option.shadow && `box-shadow: 0px 10px 50px ${Color.black}`};
  padding: 10px 15px;
  ${(props) => props.option.radius && ` border-radius: 30px;`};
  ${(props) =>
    props.option.thema === `primary`
      ? ` background-color: ${Color.primary}`
      : props.option.thema === `error`
      ? `background-color: ${Color.error}`
      : props.option.thema === `success`
      ? `background-color: ${Color.success}`
      : props.option.thema === `dark`
      ? `background-color: ${Color.dark}`
      : props.option.thema
      ? `background-color: ${props.option.thema}`
      : ``};
`

export default Button
