
import React from 'react'
import { PageNation } from '.'
export default {
  title: 'Pagination',
  component: { PageNation },
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};
const Template = {
  PaginationConf: (args) =>
  <>
    <PageNation {...args}></PageNation>
  </>
};
const posts = [
  { id: 1, name: 'Test1', content: '', url: ''},
  { id: 2, name: 'Test1', content: '', url: ''},
  { id: 3, name: 'Test1', content: '', url: ''},
  { id: 4, name: 'Test1', content: '', url: ''},
  { id: 5, name: 'Test1', content: '', url: ''},
  { id: 6, name: 'Test1', content: '', url: ''},
  { id: 7, name: 'Test1', content: '', url: ''},
  { id: 8, name: 'Test1', content: '', url: ''},
]
export const Base = Template.PaginationConf.bind({});
Base.args = {
  count: posts.length,　//ページリスト数
  postsPerList: 5,　//見せる項目数
  backgroundColor: '#000',
  upperPageBound: 3,　//ページナンバーボタン見せる数
  firstAndLast: true,　//初めと最後の番号見せるか見せないか
  borderRound: 4,　//ボタンのラウンド値
  datas: posts
};
