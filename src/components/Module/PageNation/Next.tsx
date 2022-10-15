/* eslint-disable prefer-const */
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

export const Next: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  totalPage,
  className,
  borderRound,
  ellipsis,
  color,
  path,
}) => {
  let pageNum
  pageNum = path && currentPage++ + 1
  const current = path ? currentPage - 1 : currentPage
  return (
    <Btn
      color={color}
      href={path && `/${path}${pageNum}`}
      borderRound={10 || borderRound}
      onClick={() => {
        if (!path) {
          const pageNum = currentPage++ + 1
          setCurrentPage(pageNum)
        }
      }}
      className={[current == totalPage ? 'is-disabled' : null, className].join(
        ' '
      )}
    >
      {ellipsis ? '...' : '→'}
    </Btn>
  )
}

export default Next
