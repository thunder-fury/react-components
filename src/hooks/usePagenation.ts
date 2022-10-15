import { PageNationConfigType } from '../types'
import { FIXME } from '../types/Any'

const usePagenation = (info: {
  datas: FIXME
  currentPage: number
  perPage: number
  upperPage: number
}): PageNationConfigType => {
  const { datas, currentPage, perPage, upperPage } = info
  const totalPage = Math.ceil(datas?.length / info.perPage)
  let startPage = currentPage - Math.round((upperPage - 1) / 2)
  let endPage = currentPage + Math.floor((upperPage - 1) / 2)
  if (startPage < 1) {
    endPage += 1 - startPage
  }
  startPage = Math.max(startPage, 1)
  if (endPage > totalPage) {
    startPage -= endPage - totalPage
  }
  endPage = Math.min(totalPage, endPage)

  const indexOfLastPost = info.currentPage * info.perPage
  const indexOfFirstPost = indexOfLastPost - info.perPage
  const currentPosts =
    info?.datas && info?.datas.slice(indexOfFirstPost, indexOfLastPost)
  return {
    totalPage,
    startPage,
    endPage,
    currentPage,
    currentPosts,
    upperPage,
  }
}

export default usePagenation
