import React from 'react'
import styled from 'styled-components'
import Next from './Next'
import Prev from './Prev'
interface Props {
  borderRound?: number
  upperPageBound: number
  paginate: Function
  currentPage: number
  backgroundColor?: string
  totalPage: number
  startPage?: number
  endPage: number
  setCurrentPage?: Function
  firstAndLast?: boolean
}

export const pageNationFormula = (datas: any, currentPage: number, perPage: number, upperPage:number): {[key:string]: number} => {
  let totalPage = Math.ceil(datas?.length / perPage)
  let startPage = currentPage - Math.round((upperPage - 1) / 2)
  let endPage = currentPage + Math.floor((upperPage - 1) / 2)
  if (startPage < 1) { endPage += 1 - startPage }
  startPage = Math.max(startPage, 1)
  if (endPage > totalPage) { startPage -= endPage - totalPage }
  endPage = Math.min(totalPage, endPage)

  const indexOfLastPost = currentPage * perPage
  const indexOfFirstPost = indexOfLastPost - perPage
  let currentPosts = datas && datas.slice(indexOfFirstPost, indexOfLastPost)

  return {
    totalPage,
    startPage,
    endPage,
    currentPosts
  }
}

export const Pagination: React.FC<Props> = ({
  borderRound,
  upperPageBound,
  paginate,
  currentPage,
  backgroundColor,
  totalPage,
  startPage,
  endPage,
  setCurrentPage,
  firstAndLast
}) => {
  const pageNumbers = [];
  for (let i: any = startPage; i <= endPage; i++){
    pageNumbers.push(i);
  }
  let displayFirstNum: number = firstAndLast?  2 :  1
  let displayLastNum: number = firstAndLast?  1 :  0
  
  return (
    <>
      <Prev
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <PagiNation>
        {firstAndLast && startPage != 1 && (
          <PageNum
            borderRound={borderRound}
          >
            <Link
              onClick={() => paginate(1)}
            >1</Link>
          </PageNum>)
        }
        {currentPage > (upperPageBound / 2) + displayFirstNum && (
          <Ellipsis>
          <Prev
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            ellipsis
          />
          </Ellipsis>
        )}
        {pageNumbers && pageNumbers.map(number => {
          return (
            <PageNum
              backgroundColor={backgroundColor}
              key={number}
              borderRound={borderRound}
              className={currentPage == number ? 'is-current' : null}
            >
              <Link
                onClick={() => paginate(number)}
                // href='#'
              > {number}
              </Link>
            </PageNum>
          )
        })}
        {currentPage <= totalPage - (upperPageBound / 2) - displayLastNum && (
          <Ellipsis>
          <Next
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            upperPageBound={upperPageBound}
            totalPage={totalPage}
            ellipsis
          />
        </Ellipsis>
        )}
        {firstAndLast && currentPage <= totalPage - (upperPageBound / 2) && (
            <PageNum
              borderRound={borderRound}
            >
            <Link
              onClick={() => paginate(totalPage)}
            >{totalPage}</Link>
          </PageNum>
          )
        }
      </PagiNation>
      <Next
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        upperPageBound={upperPageBound}
        totalPage={totalPage}
      />
    </>
  );
};

const Container = styled.div`
  display: flex;
`

const PagiNation = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  cursor: pointer;
  align-items: center;
  margin: 0;
`
const PageNum: any = styled.li<Props>`
  border-radius:${(props) => (props.borderRound)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  &:hover {
    background: #dfdfdf
  }
  &.is-current {
    background: ${(props) => (props.backgroundColor)};
    > a {
      color: #fff;
    }
  }
`
const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 40px;
  width: 40px;
  font-weight: bold;
`
const Ellipsis = styled.li`
  height: 40px;
  width: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Btn: any = styled.div<Props>`
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

export default Pagination


