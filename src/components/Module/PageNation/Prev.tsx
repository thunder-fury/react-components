import React from 'react'
import { Btn } from './'

export interface Props {
  currentPage: number
  setCurrentPage: any
  totalPage?: number
  upperPage?: number
  className?: string | number
  borderRound?: number
  ellipsis?: boolean
}

export const Prev: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  className,
  borderRound,
  ellipsis
}) => {
  return (
    <Btn
      borderRound={borderRound}
      onClick={() => {
        const pageNum = (currentPage++) - 1;
        setCurrentPage(pageNum)
      }}
      className={[currentPage == 1 ? 'is-disabled' : null, className].join(' ')} >
      { ellipsis? '...' : '←'}
    </Btn>
  );
};

export default Prev