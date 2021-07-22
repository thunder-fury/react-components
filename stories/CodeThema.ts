import { Story, Meta, storiesOf } from '@storybook/react'
export const codeThema = (componentName, Readme) => {
  storiesOf(componentName, module)
    .addParameters({
      readme: {
        codeTheme: 'a11y-dark',
        content: Readme,
        sidebar: Readme,
        // codeTheme: 'github',
      },
    })
}