// import React, { useState } from "react"

// interface Props {
//   posts: any,
//   searchKey: string
// }

// export const Search: React.FC<Props> = ({
//   posts,
//   searchKey
// }) => {
//   const emptyQuery = ``
//   const [state, setState] = useState({
//     filteredData: [],
//     query: emptyQuery,
//   })
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query:string = e.target.value
//     const filteredData:never[] = posts.filter((post: any) => {
//       const title = post[searchKey]
//       return title.toLowerCase().includes(query.toLowerCase())
//     })
//     setState({
//       query,
//       filteredData,
//     })
//   }
//   const { filteredData, query } = state
//   const hasSearchResults: boolean = filteredData && query !== emptyQuery
//   const results = hasSearchResults ? filteredData : posts

//   return (
//     <>
//       <input onChange={handleInputChange} />
//       {query && (
//         <div> {query !== `` ? `${query}の検索結果:${results.length}件` : `${results.length}件の記事があります`} </div>
//       )}
//       {results.map((result: {[key:string | number]: string | number}) => {
//         return(
//           <p>{result[searchKey]}</p>
//         )
//       })}
//     </>
//   )
// }
// export default Search
