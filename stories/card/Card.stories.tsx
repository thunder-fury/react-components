import * as React from "react";
import {withDocs} from 'storybook-readme'
import { Story, Meta, storiesOf } from '@storybook/react'
import { Card } from '../../src/components/Module/Card'
import Readme from './README.md'
import {codeThema} from '../CodeThema'
export default {
  title: 'Card',
  component: Card,
  argTypes: {
    thema: {
      control: { 
        type: 'select', 
        options: [
          'primary', 
          'error', 
          'success', 
          'dark'
        ] 
      }
    },
    // onClick: { action: 'clicked' },
    // parameters: {
    //   docs: {
    //     description: { component: Readme },
    //   },
    // },
  },
} as Meta;

codeThema(`Card`, Readme)

const Template: Story = (args) => <Card {...args} />

export const CardBox = Template.bind({})
CardBox.args = {
  title: 'Thunder Fury ⚡️🌪',
  btnLabel: 'CLOSE',
  txt: `<i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut provident alias voluptates illo. Natus necessitatibus odio veritatis iste quidem repellendus officia ab sit aut optio voluptatum ducimus distinctio, laboriosam delectus??</i>`,
  radius: true,
  shadow: true,
  fontColor: ''
};

