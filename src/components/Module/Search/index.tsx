import React, { useState } from "react"
import styled from 'styled-components'

interface Props {
  posts?: any
  searchKey?: string
}

export const Search: React.FC<Props> = ({
  posts,
  searchKey
}) => {
  const emptyQuery = ``
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
    const query:string = e.target.value
    const filteredData:never[] = posts.filter((post: any) => {
      const title = searchKey && post[searchKey]
      return title.toLowerCase().includes(query.toLowerCase())
    })
    setState({
      query,
      filteredData,
    })
  }
  const { filteredData, query } = state
  const [ show, setShow ] = useState(false)
  const hasSearchResults: boolean = filteredData && query !== emptyQuery
  const results = hasSearchResults ? filteredData : posts
  const active = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setShow(!show)
  }
  return (
    <>
      <input 
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {active(e)}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)} 
      />
      {query && (
        <div> {query !== `` ? `${query}の検索結果:${results.length}件` : `${results.length}件の記事があります`} </div>
      )}
      {results.map((result: {[key:string | number]: string | number}) => {
        return(
          <>
            {show &&  <p>{searchKey && result[searchKey]}</p>}
          </>
        )
      })}
    </>
  )
}

const searchList = styled.div`


`


export default Search
