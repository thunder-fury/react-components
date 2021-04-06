module.exports = {
  "stories": [
    `../stories/**/*.stories.@(js|ts|tsx|mdx)`,
    `../stories/**/**/*.stories.@(js|ts|tsx|mdx)`
  ],
  "addons": [
    `@storybook/addon-links`,
    `@storybook/addon-essentials`
  ],
  "core": {
    "builder": `webpack5`
  }
}
