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

export default Next