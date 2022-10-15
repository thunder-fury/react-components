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
  color?: string
  path?: string
}

export const Prev: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  className,
  borderRound,
  ellipsis,
  color,
  path,
}) => {
  let pageNum
  pageNum = path && currentPage++ - 1
  const current = path ? currentPage - 1 : currentPage
  console.log(currentPage)
  return (
    <Btn
      color={color}
      href={path && `/${path}${pageNum}`}
      borderRound={borderRound}
      onClick={() => {
        if (!path) {
          pageNum = currentPage++ - 1
          setCurrentPage(pageNum)
        }
      }}
      className={[current == 1 ? 'is-disabled' : null, className].join(' ')}
    >
      {ellipsis ? '...' : '←'}
    </Btn>
  )
}

export default Prev
