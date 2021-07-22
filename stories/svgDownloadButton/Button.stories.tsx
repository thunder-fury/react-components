import * as React from "react";
import {withDocs} from 'storybook-readme'
import { Story, Meta, storiesOf } from '@storybook/react'
import Button from '../../src/components/Module/SvgDownloadButton'
import Readme from './README.md'
import {codeThema} from '../CodeThema'

const data = "テスト, テスト, テスト\nテスト, テスト, テスト";

export default {
  title: 'SVGDownloadButtons',
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


codeThema(`SVGDownloadButtons`, Readme)


const Template: Story = (args) => <Button data={data} {...args} />
export const SVGDownloadButtons = Template.bind({})
SVGDownloadButtons.args = {
  label: `CSVダウンロード`,
  radius: true,
  isShadow: true,
  datas: data,
  fileName: `CSVダウンロードテスト`
};

