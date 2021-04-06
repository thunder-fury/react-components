import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../../src/components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onclick: { action: 'clicked'}
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
