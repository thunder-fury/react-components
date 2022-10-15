import { FIXME } from './Any'

export type PageNationBaseType = {
  currentPosts: any
  borderRound?: number
  backgroundColor?: string
  setCurrentPage?: FIXME
  firstAndLast?: boolean
  config: PageNationConfigType
  color?: string
  path?: string
}

export type PageNationConfigType = {
  totalPage: number
  startPage: number
  endPage: number
  currentPage: number
  currentPosts: number
  upperPage: number
}
