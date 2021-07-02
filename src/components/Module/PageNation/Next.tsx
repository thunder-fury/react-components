import React from 'react';
import styled from 'styled-components';
import Button from '../../Atoms/Button'

export interface Props {
  currentPage: number
  setCurrentPage: any
  totalPage?: number
  upperPageBound?: number
  className?: string | number
  borderRound?: number
  ellipsis?: boolean
}

export const Next: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  totalPage,
  className,
  borderRound,
  ellipsis
}) => {
  return (
    <Btn
      borderRound={borderRound}
      onClick={() => {
        const pageNum = (currentPage++) + 1;
        setCurrentPage(pageNum)
      }}
      className={[currentPage == totalPage ? 'is-disabled' : null, className].join(' ')}>
      { ellipsis? '...' : '→'}
    </Btn>
  );
};

const Btn: any = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
  border-radius:${(props) => (props.borderRound)}px;
  &:hover {
    background: #dfdfdf
  }
  &.is-disabled {
    pointer-events: none;
    opacity: 0.1;
  }
  &.ellipsis {
    &:hover {
      background: none;
    }
  }
  >svg {
    width: 15px
  }
`

export default Next