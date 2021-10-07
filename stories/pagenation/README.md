# Page Nation
```ts
import { PageNation, PageNationConfig } from '@thunder_fury/react-components'

```

## Props

|  Name  |  Required  |  Type  | DefaultValue  | Description  |
| ---- | ---- |  ----  |  ----  |  ----  | 
|  firstAndLast  |  -  |  boolan  |  false  |  pagenation left and right button  |
|  backgroundColor  |  -  |  string  | #000  | pagenation button color  |
|  borderRound  |  -  |  number  | null  | pagenation button round  |
|  setCurrentPage  |  ○  |  useState  | -  | currentPage  |

## Set Config

```tsx
import { PageNationConfig } from '@thunder_fury/react-components'
```
Returning the current page by setting 

return value: `currentPosts`

```tsx
  const [currentPage, setCurrentPage] = useState(1)
  const conf = PageNationConfig({
    currentPage: currentPage,
    datas: datas,
    perPage: 2,
    upperPage: 1
  })
```

```tsx
  <Pagination
    config={conf}
    setCurrentPage={setCurrentPage}
  />
```

## Set Post List

```jsx
  <ul>
    {conf.currentPosts.map((item: { [key: string]: number | string }) => {
      return (
        <li key={item.id}>
          <P>{item.id}{item.content}</P>
        </li>
      )
    })}
  </ul>
```