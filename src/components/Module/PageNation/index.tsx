import React from 'react'
import Next from './Next'
import Prev from './Prev'
import styled from 'styled-components'

export const PageNationConfig = (info:{
    datas: any, 
    currentPage: number, 
    perPage: number, 
    upperPage:number}): {[key:string]: number} => {
  let totalPage = Math.ceil(info.datas?.length / info.perPage)
  let startPage = info.currentPage - Math.round((info.upperPage - 1) / 2)
  let endPage = info.currentPage + Math.floor((info.upperPage - 1) / 2)
  if (startPage < 1) { endPage += 1 - startPage }
  startPage = Math.max(startPage, 1)
  if (endPage > totalPage) { startPage -= endPage - totalPage }
  endPage = Math.min(totalPage, endPage)

  const indexOfLastPost = info.currentPage * info.perPage
  const indexOfFirstPost = indexOfLastPost - info.perPage
  let currentPosts = info.datas && info.datas.slice(indexOfFirstPost, indexOfLastPost)
  let currentPage = info.currentPage
  let upperPage = info.upperPage
  return {
    totalPage,
    startPage,
    endPage,
    currentPage,
    currentPosts,
    upperPage
  }
}

interface Props {
  borderRound?: number
  backgroundColor?: string
  setCurrentPage?: any
  firstAndLast?: boolean
  config: {[key: string]: number}
}

export const Pagination: React.FC<Props> = ({
  borderRound,
  backgroundColor,
  setCurrentPage,
  firstAndLast,
  config
}) => {
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const pageNumbers = [];
  for (let i: any = config.startPage; i <= config.endPage; i++){
    pageNumbers.push(i);
  }
  let displayFirstNum: number = firstAndLast?  2 :  1
  let displayLastNum: number = firstAndLast?  1 :  0
  
  return (
    <>
      <Prev
        setCurrentPage={setCurrentPage}
        currentPage={config.currentPage}
      />
      <PagiNation>
        {firstAndLast && config.startPage != 1 && (
          <PageNum
            borderRound={borderRound}
          >
            <Link
              onClick={() => paginate(1)}
            >1</Link>
          </PageNum>)
        }
        {config.currentPage > (config.upperPage / 2) + displayFirstNum && (
          <Ellipsis>
          <Prev
            setCurrentPage={setCurrentPage}
            currentPage={config.currentPage}
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
              className={config.currentPage == number ? 'is-current' : null}
            >
              <Link
                onClick={() => paginate(number)}
                // href='#'
              > {number}
              </Link>
            </PageNum>
          )
        })}
        {config.currentPage <= config.totalPage - (config.upperPage / 2) - displayLastNum && (
          <Ellipsis>
          <Next
            setCurrentPage={setCurrentPage}
            currentPage={config.currentPage}
            upperPage={config.upperPage}
            totalPage={config.totalPage}
            ellipsis
          />
        </Ellipsis>
        )}
        {firstAndLast && config.currentPage <= config.totalPage - (config.upperPage / 2) && (
            <PageNum
              borderRound={borderRound}
            >
            <Link
              onClick={() => paginate(config.totalPage)}
            >{config.totalPage}</Link>
          </PageNum>
          )
        }
      </PagiNation>
      <Next
        setCurrentPage={setCurrentPage}
        currentPage={config.currentPage}
        upperPage={config.upperPage}
        totalPage={config.totalPage}
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


