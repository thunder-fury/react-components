import * as React from "react";
import {withDocs} from 'storybook-readme'
import { Story, Meta, storiesOf } from '@storybook/react'
import { Modal } from '../../src/components/Module/Mdal'
import Readme from './README.md'
import {codeThema} from '../CodeThema'
export default {
  title: 'Modal',
  component: Modal,
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

codeThema(`Modal`, Readme)

const Template: Story = (args) => <Modal {...args} />

export const ModalBox = Template.bind({})
ModalBox.args = {
  title: 'Thunder Fury ⚡️🌪',
  btnLabel: 'CLOSE',
  txt: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut provident alias voluptates illo. Natus necessitatibus odio veritatis iste quidem repellendus officia ab sit aut optio voluptatum ducimus distinctio, laboriosam delectus?`,
  radius: true,
  isShadow: true,
};

