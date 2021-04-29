import React, { useState } from 'react';
import { Pagination } from './Pager'
import { Next, Prev } from './PagerBtn'
import styled from 'styled-components';
import Posts from './Posts'
export interface Props {
  count?: number
  backgroundColor?: string
  totalPage?: number
  upperPageBound?: any
  postsPerList?: number
  firstAndLast?: boolean
  borderRound?: number
  datas?: string[]
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PageNation: React.FC<Props> = ({
  count,
  backgroundColor,
  totalPage,
  upperPageBound,
  postsPerList,
  firstAndLast,
  borderRound,
  datas
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  totalPage = Math.ceil(count / postsPerList);
  let startPage = currentPage - Math.round((upperPageBound - 1) / 2);
  let endPage = currentPage + Math.floor((upperPageBound - 1) / 2);
  if (startPage < 1) {
    endPage += 1 - startPage
  }
  if (endPage > totalPage) {
    startPage -= endPage - totalPage
  }
  startPage = Math.max(startPage, 1)
  endPage = Math.min(totalPage, endPage)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const indexOfLastPost = currentPage * postsPerList
  const indexOfFirstPost = indexOfLastPost - postsPerList
  const currentPosts = datas && datas.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <PaginationContainer>
      <Posts posts={currentPosts} />
      {count > 0 && (
        <Prev
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          borderRound={borderRound}
        />
      )}
      {count > 0 && (
        <Pagination
          currentPage={currentPage}
          upperPageBound={upperPageBound}
          paginate={paginate}
          totalPage={totalPage}
          startPage={startPage}
          endPage={endPage}
          setCurrentPage={setCurrentPage}
          backgroundColor={backgroundColor}
          firstAndLast={firstAndLast}
          borderRound={borderRound}
        />
      )}
      {count > 0 && (
        <Next
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          upperPageBound={upperPageBound}
          totalPage={totalPage}
          borderRound={borderRound}
        />
      )}
    </PaginationContainer>
  );
};

export default PageNation