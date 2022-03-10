import React, { useState } from 'react';
import Pagination, { PageNationConfig } from '../../src/components/Module/PageNation'
import styled from 'styled-components';
import Posts from './Posts'
export interface Props {
  count?: number
  backgroundColor?: string
  totalPage?: number
  upperPage?: any
  postsPerList?: number
  firstAndLast?: boolean
  borderRound?: number
  datas?: any
  displayData?: boolean
  current?: number
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PageNation: React.FC<Props> = ({
  count,
  backgroundColor,
  firstAndLast,
  borderRound,
  datas,
  displayData,
  current,
  upperPage
}) => {
  // // 현재 페이지 를 설정하는 훅이다
  const [currentPage, setCurrentPage] = useState(1);
  // /*
  //   이 컴포넌트는 총 페이지에수에서 보여주는 페이지네이션이 보다 크거나 마이너스 가 되거나
  //   보여주고싶은 페이지네이션이 극단적으로 설정이 될경우엔 이 페이지 네이션은 잘 동작하지 않을것이다 계산에 맞게 잘 설정을 해야된다.
  // */
  // /* 1.총 페이지 구하기
  //   총 게시물 수 / 보여주는 게시물수
  //   총 게시물이 100개 나누기 보여주고싶은 게시물이 10개 경우에
  //   총 페이지는 10페이지가 된다
  //   count프롭스는 포스트의 길이로 설정하는게 적합하다 例)posts.length
  // */
  // totalPage = Math.ceil(count / postsPerList);

  // // ***예)보여주고싶은 페이지 네이션이 6 개일경우 전제***
  // // 스타트와 마지막 페이지를 구한다
  // /* 2.스타트 페이지 구하기
  //   현재 페이지 - (보여주고싶은 페이지 네이션 - 1) / 2 에서 반올림을 해준 나머지
  //   예)1(현재 페이지) - (6 - 1) /2 반올림한 나머지 3 을 계산 하면 초기 스타트 페이지는 -2 로 할당이 된다
  //   현재 패이지가 1씩 올라갈수록 스타트 페이지는 1씩 증가 할것이다
  // */
  // let startPage = currentPage - Math.round((upperPage - 1) / 2);
  // /* 3.마지막 페이지 구하기
  //   반대로 현재 페이지 + (보여주고싶은 페이지 네이션 - 1) / 2 에서 내림 해준 나머지
  //   1(현재 페이지) - (6 - 1) /2 = 2.5 내림한 2를 계산 을 하면
  //   마지막 페이지는 3 으로 할당이 된다
  // */
  // let endPage = currentPage + Math.floor((upperPage - 1) / 2);

  // /* 4.마이너스 값 조절하기
  //   초기 마지막 페이지가 3으로 계산이 되기때문에 보여주는 페이지는 결국 초기결과는 페이지네이션 3개만 표시가 될것이다
  //   그렇기때문에 초반 에 보여주고 싶은 페이지를 계산하기 위해서는 조건이 필요하다
  //   초반엔 -2가 할당이 되기때문에 조건에 만족이 될것이며
  //   초기 마지막페이지3에 1을 붙여넣고 빼기 초기 스타트 페이지-2가 되기 때문에 「-」와「-」가만나 더하기를 할것이며 6이기 때문에 결론은 보여주고싶은
  //   페이지가 될것이다 스타트 페이지가 1이 될때까지 조건은 계속될것이며 그이후에는 보여주고싶은 페이지가 되기때문에 조건은 성립되지 않을것이다.
  // */
  // if (startPage < 1) { endPage += 1 - startPage }
  // /* 초기 스타트페이지는 1보다 적기때문에 스타트 페이지가 1을 유지할수있도록 재할당 해준다 */
  // startPage = Math.max(startPage, 1)

  // /* 5.플러스 값 조절하기
  //   반대로 마지막페이지는 늘어나기때문에 반대 처리 를 해준다
  // */
  // if (endPage > totalPage) { startPage -= endPage - totalPage }
  // /* 마지막페이지는 높아지기 때문에 적은페이지를 반환할수있도록 재할당 해준다 */
  // endPage = Math.min(totalPage, endPage)

  // // 클릭할경우 현재 페이지를 1씩 늘리는 함수다

  // /* 보여주고싶은 게시물이 5일경우
  // 마지막 게시물값을 구한다 현페이지는1이고 곱하기 보여주고싶은 게시물수는 5를 라스트 포스트에 할당해준다 결과는 */
  // const indexOfLastPost = currentPage * postsPerList // -> 5
  // /* 할당해준 마지막 게시물5에서 보여주고싶은 페이지 5 를빼주면 0이된다 */
  // const indexOfFirstPost = indexOfLastPost - postsPerList // ->0
  // /* 게시물을 슬라이스 해준다(시작 위치, 끝 위치) 시작은 0 될것이고 끝은 5가 되기때문에 보여주고싶은 5개의 게시물이 나올것이다
  // postsPerList(보여주고싶은 게시물) 설정을 어떤 수를해도 indexOfFirstPost는 0이 될것이며 슬라이스 값은 indexOfLastPost 자르기때문에
  // 보여주고싶은 게시물수가 될것이다 */
  // let currentPosts = datas && datas.slice(indexOfFirstPost, indexOfLastPost)

  const pageNationConfig = PageNationConfig({
    datas,
    currentPage: current,
    perPage: 2,
    upperPage: upperPage
  })
  console.log(pageNationConfig.currentPosts)
  return (
    <PaginationContainer>
      {(<Posts posts={pageNationConfig.currentPosts} />)}
      {count > 0 && (
        <Pagination
          config={pageNationConfig}
          setCurrentPage={setCurrentPage}
          backgroundColor={`#000`}
          firstAndLast={firstAndLast}
          borderRound={borderRound}
          path='test'
        />
      )}
    </PaginationContainer>
  );
};
export default PageNation
