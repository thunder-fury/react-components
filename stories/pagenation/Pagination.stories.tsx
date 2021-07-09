
import React from 'react'
import { PageNation } from '.'
import Readme from './README.md'
import { Story, Meta, storiesOf } from '@storybook/react'
import { codeThema } from '../CodeThema'
export default {
  title: 'Pagination',
  component: { PageNation },
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    parameters: {
      docs: {
        description: { component: Readme },
      },
    },
  },
};

codeThema(`Pagination`, Readme)

const Template = {
  PaginationConf: (args) =>
  <>
    <PageNation {...args}></PageNation>
  </>
};
const posts = [
  { id: 1, name: 'Test1', content: '', url: ''},
  { id: 2, name: 'Test2', content: '', url: ''},
  { id: 3, name: 'Test3', content: '', url: ''},
  { id: 4, name: 'Test4', content: '', url: ''},
  { id: 5, name: 'Test5', content: '', url: ''},
  { id: 6, name: 'Test6', content: '', url: ''},
  { id: 7, name: 'Test7', content: '', url: ''},
  { id: 8, name: 'Test8', content: '', url: ''},
  { id: 9, name: 'Test9', content: '', url: ''},
  { id: 10, name: 'Test10', content: '', url: ''},
]
export const Base = Template.PaginationConf.bind({});
Base.args = {
  count: posts.length,　//게시물 수
  postsPerList: 5,　//보여주고싶은 글
  backgroundColor: '#000',
  upperPageBound: 1,　//보여주고싶은 페이지네이션수
  firstAndLast: true,　//첫 페이지 마지막 페이지 네이션 표시 
  borderRound: 4,　
  datas: posts, // 통신한 게시물
  displayData: false 
};
