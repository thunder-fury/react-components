import * as React from "react";
import {withDocs} from 'storybook-readme'
import { Story, Meta, storiesOf } from '@storybook/react'
import SVGDownloadButton from '../../src/components/Module/SvgDownloadButton'
import readme from './README.md'
import { codeThema } from '../CodeThema'

const data = "テスト, テスト, テスト\nテスト, テスト, テスト";

export default {
  title: 'SVGDownloadButton',
  component: SVGDownloadButton,
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
    // parameters: {
    //   docs: {
    //     description: { component: readme },
    //   },
    // },
  },
} as Meta;


codeThema(`SVGDownloadButton`, readme)


const Template: Story = (args) => <SVGDownloadButton {...args} />
export const svgDownloadButton = Template.bind({})
svgDownloadButton.args = {
  label: `CSV Download`,
  radius: true,
  shadow: true,
  data: data,
  fileName: `TEST_CSV_Download`
};

