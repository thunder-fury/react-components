import * as React from "react";
import {withDocs} from 'storybook-readme'
import { Story, Meta, storiesOf } from '@storybook/react'
import { Button } from '../../src/components/Atoms/Button/'
import Readme from './README.md'

// storiesOf('Button', module)
//   .addParameters({
//     readme: {
//       codeTheme: 'duotone-sea',
//       content: Readme,
//       sidebar: Readme,
//     },
//   })
//   .add('Button', () => <Button label={'Hello Im Button'} />)
//   .add('Alert Button', () => (
//     <button>TEST</button>
//   ))
//   .add('Success Button', () => (
//     <button>TEST</button>
//   ));

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
    parameters: {
      docs: {
        description: { component: Readme },
      },
    },
  },
} as Meta;



storiesOf('Buttons', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      // content: Readme,
      sidebar: Readme,
      // codeTheme: 'github',
    },
  })

  const Template: Story = (args) => <Button {...args} />
export const TextBtn = Template.bind({})
TextBtn.args = {
  label: 'Button',
  radius: true,
  isShadow: true,
};

export const IconBtn = Template.bind({})
IconBtn.args = {
  label: '🌪',
  radius: true,
  isShadow: true,
};

