import React from 'react'
import styled from 'styled-components'
import Button from './../Button'
import { Color } from './../../styles/Color'
interface Props {
  thema?: 'primary' | 'error' | 'success' | 'dark'
  title?: string
  txt?: string
  radius?: boolean
  isShadow?:boolean
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const ModalBox = styled.section`
  position: relative;
  text-align: center;
  &.is-show {
    display: block;
  }
`
const ModalBoxInner = styled.div`
  background-color: ${Color.gray};
  padding: 4%;
  max-width: 300px;
  &.is-shadow {
    box-shadow: 0px 10px 50px ${Color.black};
  }
  padding: 10px 15px;
  &.is-radius {
    border-radius: 10px;
  }
  &.is-primary {
    &.is-shadow {
      box-shadow: 0px 10px 50px ${Color.primary};
    }
  }
  &.is-error {
    &.is-shadow {
      box-shadow: 0px 10px 50px ${Color.error};
    }
  }
  &.is-success {
    &.is-shadow {
      box-shadow: 0px 10px 50px ${Color.success};
    }
  }
  &.is-dark {
    &.is-shadow {
      box-shadow: 0px 10px 50px  ${Color.dark};
    }
  }

`
const Title = styled.h2`
  &.is-primary {
    color: ${Color.primary};
  }
  &.is-error {
    color: ${Color.error};
  }
  &.is-success {
    color: ${Color.success};
  }
  &.is-dark {
    color: ${Color.dark};
  }
`
const Txt = styled.p`
  font-size: 12px;
  text-align: left;
`
export const Modal: React.FC<Props> = ({
  thema,
  title,
  txt,
  onClick,
  radius,
  isShadow
}) => {
  return(
    <>
      <ModalBox>
        <ModalBoxInner
          className={[
            `is-${thema}`,
            radius? 'is-radius': '',
            isShadow? 'is-shadow' : ''
          ].join(' ')}
        >
          <Title
            className={[
              `is-${thema}`
            ].join(' ')}
          >{title}</Title>
          <Txt>{txt}</Txt>
          <Button
            buttonColor={thema}
            isShadow={isShadow}
            label="🙅‍♂️"
            onClick={onClick}
            radius
          />
        </ModalBoxInner>
      </ModalBox>
      
    </>
  )
}