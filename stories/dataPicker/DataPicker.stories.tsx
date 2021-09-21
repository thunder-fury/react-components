import * as React from "react";
import {withDocs} from 'storybook-readme'
import { Story, Meta, storiesOf } from '@storybook/react'
import DatePicker from '../../src/components/Module/DatePicker'
import Readme from './README.md'
import {codeThema} from '../CodeThema'
export default {
  title: 'DatePicker',
  component: DatePicker,
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
    onClick: { action: 'clicked' },
    parameters: {
      docs: {
        description: { component: Readme },
      },
    },
  },
} as Meta;

codeThema(`DatePicker`, Readme)

const Template: Story = (args) => <DatePicker {...args} />

export const datePickr = Template.bind({})
datePickr.args = {

};

