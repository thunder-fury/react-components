import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import Calendar from '../../src/components/Module/Calendar'
import { codeThema } from '../CodeThema'
import Readme from './README.md'
export default {
  title: 'Calendar',
  component: Calendar,
  argTypes: {
    // thema: {
    //   control: {
    //     type: 'select',
    //     options: ['primary', 'error', 'success', 'dark'],
    //   },
    // },
    // onClick: { action: 'clicked' },
    parameters: {
      docs: {
        description: { component: Readme },
      },
    },
  },
} as Meta

codeThema(`Calendar`, Readme)

const Template: Story = (args) => {
  return (
    <>
      <Calendar {...args} />
      <br />
      <Calendar {...args} />
    </>
  )
}

export const calendar = Template.bind({})
calendar.args = {
  length: ``,
}

export const jaCalendar = Template.bind({})
jaCalendar.args = {
  length: `ja`,
}
export const koCalendar = Template.bind({})
koCalendar.args = {
  length: `ko`,
}
