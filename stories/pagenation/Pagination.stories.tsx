
import React from 'react';
import { PageNation } from '../../src/components/PageNation';
export default {
  title: 'Pagination',
  component: { PageNation },
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'current pageの背景色'
    },
    count: {
      description: '総コンテンツ数'
    },
    postsPerList: {
      description: '１ページあたりの項目数'
    },
    upperPageBound: {
      description: 'ページャーの表示数（省略を除く）'
    },
    firstAndLast: {
      description: '最初のページ、最後のページを表示'
    },
    borderRound: {
      description: 'ボタンの角丸'
    },
  },
};
const Template = {
  PaginationConf: (args) => <PageNation {...args} />,
};
export const Base = Template.PaginationConf.bind({});
Base.args = {
  count: 100,　//ページリスト数
  postsPerList: 5,　//見せる項目数
  backgroundColor: '#000',
  upperPageBound: 3,　//ページナンバーボタン見せる数
  firstAndLast: true,　//初めと最後の番号見せるか見せないか
  borderRound: 4　//ボタンのラウンド値
};
