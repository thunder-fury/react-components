import * as React from "react";
import {withDocs} from 'storybook-readme'
import { Story, Meta, storiesOf } from '@storybook/react'
import SVGDownloadBtn from '../../src/components/Module/SvgDownloadButton'
import readme from './README.md'
import { codeThema } from '../CodeThema'

const data = "テスト, テスト, テスト\nテスト, テスト, テスト";

export default {
  title: 'SVGDownloadButton',
  component: SVGDownloadBtn,
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
        description: { component: readme },
      },
    },
  },
} as Meta;


codeThema(`SVGDownloadButton`, readme)


const Template: Story = (args) => <SVGDownloadBtn {...args} />
export const SVGDownloadButton = Template.bind({})
SVGDownloadButton.args = {
  label: `CSV Download`,
  radius: true,
  isShadow: true,
  data: data,
  fileName: `TEST_CSV_Download`
};

