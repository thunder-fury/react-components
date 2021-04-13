import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../../src/components/Button';
export default {
  title: 'Buttons',
  component: Button,
  argTypes: {
    buttonColor: {
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
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const TextBtn = Template.bind({});
TextBtn.args = {
  label: 'Button',
  radius: true,
  isShadow: true,
};

export const IconBtn = Template.bind({});
IconBtn.args = {
  label: '⚡️',
  radius: true,
  isShadow: true,
};