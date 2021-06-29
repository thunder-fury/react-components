import { addParameters, addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme'
import { themes } from '@storybook/theming';
export const parameters = {
  docs: {
    theme: themes.dark,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    // theme: basicTheme,
    theme: themes.dark,
  },
})
addDecorator(addReadme)