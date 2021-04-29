import React from 'react';
import styled from 'styled-components';
import { Next, Prev } from './PagerBtn'
import Button from '../Button'
interface Props {
  borderRound?: number
  upperPageBound?: number
  paginate?: Function
  currentPage?: number
  backgroundColor?: string
  totalPage?: number
  startPage?: number
  endPage?: number
  setCurrentPage?: Function
  firstAndLast?: boolean
}
const Paginations = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  cursor: pointer;
  align-items: center;
  margin: 0;
`
const PageNum = styled.li<Props>`
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
  for (let i: number = startPage; i <= endPage; i++){
    pageNumbers.push(i);
  }
  let displayFirstNum: number = firstAndLast?  2 :  1
  let displayLastNum: number = firstAndLast?  1 :  0
  return (
    <nav>
      <Paginations>
          {
            (() => {
              if(firstAndLast && startPage != 1){
                return (
                  <PageNum
                    borderRound={borderRound}
                  >
                    <Link
                      onClick={() => paginate(1)}
                    >1</Link>
                  </PageNum>
                );
              }
            })()
          }
          {
            (() => {
            if (currentPage > (upperPageBound / 2) + displayFirstNum) {
              return (
                <Ellipsis>
                  <Prev
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    ellipsis
                  />
                </Ellipsis>
              );
            }
          })()
        }
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
        {
          (() => {
            if (currentPage <= totalPage - (upperPageBound / 2) - displayLastNum) {
              return (
                <Ellipsis>
                  <Next
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    upperPageBound={upperPageBound}
                    totalPage={totalPage}
                    ellipsis
                  />
                </Ellipsis>
              );
            }
          })()
        }
        {
          (() => {
            if(firstAndLast && currentPage <= totalPage - (upperPageBound / 2)) {
              return (
                <PageNum
                  borderRound={borderRound}
                >
                  <Link
                    onClick={() => paginate(totalPage)}
                  >{totalPage}</Link>
                </PageNum>
              );
            }
          })()
        }
      </Paginations>
    </nav>
  );
};
