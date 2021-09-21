
import React from 'react'
import Search from '../../src/components/Module/Search'
import Readme from './README.md'
import { Story, Meta, storiesOf } from '@storybook/react'
import { codeThema } from '../CodeThema'
export default {
  title: 'Search',
  component: { Search },
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

codeThema(`Search`, Readme)
const Template: Story = (args) => <Search searchKey={`title`} posts={posts} {...args} />
const posts = [
  { id: 1, title: 'html', content: 'html is ...'},
  { id: 2, title: 'css', content: 'css is ...'},
  { id: 3, title: 'javascript', content: 'javascript is ...'},
  { id: 4, title: 'react', content: 'react is ...'},
  { id: 5, title: 'vue', content: 'vue is ...'},
  { id: 6, title: 'node', content: 'node is ...'},
  { id: 7, title: 'gatsby', content: 'gatsby is ...'},
]
export const SearchBox = Template.bind({});
SearchBox.args = {

};
