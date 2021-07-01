import React from 'react';
import styled from 'styled-components';
import Button from '../../Atoms/Button'
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

const Paginations = styled.ul`
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

export default Pagination

export interface PagerBtnPorps {
  currentPage: number
  setCurrentPage: any
  totalPage?: number
  upperPageBound?: number
  className?: string | number
  borderRound?: number
  ellipsis?: boolean
}

export const Next: React.FC<PagerBtnPorps> = ({
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
export const Prev: React.FC<PagerBtnPorps> = ({
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

const Btn: any = styled.div<PagerBtnPorps>`
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