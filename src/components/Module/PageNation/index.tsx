import React from 'react'
import Next from './Next'
import Prev from './Prev'
import styled from 'styled-components'
import { Color } from '../../../styles/common/Color'
import { PageNationBaseType } from '../../../types'
import { FIXME } from '../../../types/Any'
export const PagiNation: React.FC<PageNationBaseType> = ({
  borderRound,
  backgroundColor,
  setCurrentPage,
  firstAndLast,
  config,
  color,
  path,
}) => {
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    return pageNumber
  }
  const pageNumbers = []
  for (let i: number = config.startPage; i <= config.endPage; i++) {
    pageNumbers.push(i)
  }
  const displayFirstNum: number = firstAndLast ? 2 : 1
  const displayLastNum: number = firstAndLast ? 1 : 0
  return (
    <PageNation>
      <PageNum>
        <Prev
          path={path}
          setCurrentPage={setCurrentPage}
          currentPage={config.currentPage}
        />
      </PageNum>
      <>
        {firstAndLast && config.startPage != 1 && (
          <PageNum borderRound={5 || borderRound}>
            <Link
              color={color}
              href={path && `/${path}${paginate(1)}`}
              onClick={() => !path && paginate(1)}
            >
              1
            </Link>
          </PageNum>
        )}
        {config.currentPage > config.upperPage / 2 + displayFirstNum && (
          <Ellipsis>
            <Prev
              path={path}
              setCurrentPage={setCurrentPage}
              currentPage={config.currentPage}
              ellipsis
            />
          </Ellipsis>
        )}
        {pageNumbers &&
          pageNumbers.map((number) => {
            console.log(number)
            return (
              <PageNum
                backgroundColor={`#000` || backgroundColor}
                borderRound={5 || borderRound}
                key={number}
                className={config.currentPage == number ? 'is-current' : ''}
              >
                <Link
                  color={color}
                  href={path && `/${path}/${paginate(number)}`}
                  onClick={() => !path && paginate(number)}
                  // href='#'
                >
                  {' '}
                  {number}
                </Link>
              </PageNum>
            )
          })}
        {config.currentPage <=
          config.totalPage - config.upperPage / 2 - displayLastNum && (
          <Ellipsis>
            <Next
              path={path}
              setCurrentPage={setCurrentPage}
              currentPage={config.currentPage}
              upperPage={config.upperPage}
              totalPage={config.totalPage}
              ellipsis
            />
          </Ellipsis>
        )}
        {firstAndLast &&
          config.currentPage <= config.totalPage - config.upperPage / 2 && (
            <PageNum borderRound={5 || borderRound}>
              <Link
                color={color}
                href={path && `/${path}/${paginate(config.totalPage)}`}
                onClick={() => !path && paginate(config.totalPage)}
              >
                {config.totalPage}
              </Link>
            </PageNum>
          )}
      </>
      <Next
        path={path}
        setCurrentPage={setCurrentPage}
        currentPage={config.currentPage}
        upperPage={config.upperPage}
        totalPage={config.totalPage}
      />
    </PageNation>
  )
}

const PageNation = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  cursor: pointer;
  align-items: center;
  margin: 0;
`
const PageNum = styled.li<{
  borderRound?: number
  backgroundColor?: string
}>`
  border-radius: ${(props) => props.borderRound}px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  /* &:hover {
    background: #dfdfdf
  } */
  &.is-current {
    background: ${(props) => props.backgroundColor};
    > a {
      color: #fff;
    }
  }
`
const Link = styled.a<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 40px;
  width: 40px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : Color.white)};
  /* color: ${(props) => props.color}; */
`
const Ellipsis = styled.li`
  height: 40px;
  width: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Btn = styled.a<{
  borderRound?: number
  color?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
  border-radius: ${(props) => props.borderRound}px;
  color: ${(props) => (props.color ? props.color : Color.white)};
  text-decoration: none;
  /* &:hover {
    background: #dfdfdf;
  } */
  &.is-disabled {
    pointer-events: none;
    opacity: 0.1;
    &:hover {
      background: none;
    }
  }
  &.ellipsis {
    &:hover {
      background: none;
    }
  }
  > svg {
    width: 15px;
  }
`

export default PagiNation
