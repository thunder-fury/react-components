import { Story, Meta, storiesOf } from '@storybook/react'

export const codeThema = (component, Readme) => {
  storiesOf(component, module)
    .addParameters({
      readme: {
        codeTheme: 'a11y-dark',
        content: Readme,
        sidebar: Readme,
        // codeTheme: 'github',
      },
    })
}