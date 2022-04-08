import * as React from 'react'
import { withDocs } from 'storybook-readme'
import { Story, Meta, storiesOf } from '@storybook/react'
import Calendar from '../../src/components/Module/calendar'
import Readme from './README.md'
import { codeThema } from '../CodeThema'
export default {
  title: 'DatePicker',
  component: Calendar,
  argTypes: {
    thema: {
      control: {
        type: 'select',
        options: ['primary', 'error', 'success', 'dark'],
      },
    },
    onClick: { action: 'clicked' },
    parameters: {
      docs: {
        description: { component: Readme },
      },
    },
  },
} as Meta

codeThema(`Calendar`, Readme)

const Template: Story = (args) => <Calendar {...args} />

export const datePickr = Template.bind({})
datePickr.args = {}
