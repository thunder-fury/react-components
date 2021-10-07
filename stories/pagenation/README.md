# Page Nation
```ts
import { PageNation, PageNationConfig } from '@thunder_fury/react-components'

```

## Props
<hr/>

|  Name  |  Required  |  Type  | DefaultValue  | Description  |
| ---- | ---- |  ----  |  ----  |  ----  | 
|  firstAndLast  |  -  |  boolan  |  false  |  最初のと最後のページネーションを表示するかしないか  |
|  backgroundColor  |  -  |  string  | #000  | ページネーションの色調整(カラーコード設定)  |
|  borderRound  |  -  |  number  | null  | ボーダーのラウンド値調整  |
|  setCurrentPage  |  ○  |  useState  | -  | 現在のページを変更させるProps  |
|  config  |  ○  |  Object  | -  | ページネーション設定  |

## Set Config
<hr/>

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