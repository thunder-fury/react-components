import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../../src/components/Button';
import { Color } from '../../src/styles/Color'
export default {
  title: 'Button',
  component: Button,
  label: 'Button',
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

export const Btn = Template.bind({});
Btn.args = {
  label: 'Button',
  radius: true,
  
};
