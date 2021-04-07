import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../../src/components/Button';
import { Color } from '../../src/styles/Color'
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
    backgroundColor: {
      control: { type: 'select', options: ['primary'] }
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};
