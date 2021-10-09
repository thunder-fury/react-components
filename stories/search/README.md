# Page Nation
```ts
import { Search } from '@thunder_fury/react-components'
```
Setting post data to `Posts` Props can simply output search results

## Props
|  Name  |  Required  |  Type  | DefaultValue  | Description  |
| ---- | ---- |  ----  |  ----  |  ----  | 
|  posts  |  -  |  string  |  'Button'  |  Button Text |
|  searchKey  |  -  |  string  |  -  |  search target and search results  |

## Sample

```jsx
<SearchInput
  searchKey="title"
  posts={[
    {
      content: 'html is ...',
      id: 1,
      link: '#',
      title: 'html'
    },
    {
      content: 'css is ...',
      id: 2,
      link: '#',
      title: 'css'
    },
    {
      content: 'javascript is ...',
      id: 3,
      link: '#',
      title: 'javascript'
    },
    {
      content: 'react is ...',
      id: 4,
      link: '#',
      title: 'react'
    },
    {
      content: 'vue is ...',
      id: 5,
      link: '#',
      title: 'vue'
    },
    {
      content: 'node is ...',
      id: 6,
      link: '#',
      title: 'node'
    },
    {
      content: 'gatsby is ...',
      id: 7,
      link: '#',
      title: 'gatsby'
    }
  ]}
/>
```